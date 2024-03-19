import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { selectAuthData } from "../redux/AuthSlice"
import { resCount, selectCounter, selectProducts, setCount,  setToggol } from "../redux/ProductSlice"

function useAudit() {
    const dispatch = useDispatch()
    const productId = useSelector(selectProducts)
    const AuthProduct = useSelector(selectAuthData)
    const count = useSelector(selectCounter)
    const grupaId = AuthProduct.grup[productId[0]]
    const Audit = grupaId.audit[0] 
    const product = grupaId.product

    const getElement = async (element) => {
        const countElement = await element.priceProduct * element.totalProduct
        dispatch(setCount(countElement))
    }

    const counter = () => {
        dispatch(resCount())
        product.forEach((element) => {
            if (element.priceProduct > 0 && element.totalProduct > 0) {
                getElement(element)
            }
        });
        dispatch(setToggol(true))
    }

    const censelCount = () => {
        dispatch(resCount())
        dispatch(setToggol(false))
    }

    const adudit = async () => {
        if (Audit) {
            await axios.put(`http://127.0.0.1:8000/api/v1/user/grup/audit/${Audit.id}/`, {
                totalMoney: count,
                boss: AuthProduct.id,
                grup: grupaId.id,
            })
        }
        else {
            axios.post('http://127.0.0.1:8000/api/v1/user/grup/audit/', {
                totalMoney: count,
                boss: AuthProduct.id,
                grup: grupaId.id,
            })
        }
        window.location.reload()
    }
    return [counter, censelCount, adudit ]
}

export default useAudit