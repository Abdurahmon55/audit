# Generated by Django 5.0.3 on 2024-03-16 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_audit_grup_alter_audit_boss'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grupproduct',
            name='imageGrup',
            field=models.ImageField(default='static/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration1.jpg', upload_to='your_directory/'),
        ),
    ]
