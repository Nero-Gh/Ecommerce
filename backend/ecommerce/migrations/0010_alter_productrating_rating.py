# Generated by Django 4.1.3 on 2022-11-16 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0009_productrating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productrating',
            name='rating',
            field=models.IntegerField(max_length=5),
        ),
    ]
