# Generated by Django 5.0.3 on 2024-03-14 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_grupproduct_your_boolean_field'),
    ]

    operations = [
        migrations.AddField(
            model_name='grupproduct',
            name='authAddImage',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='product',
            name='authAddImage',
            field=models.TextField(blank=True),
        ),
    ]
