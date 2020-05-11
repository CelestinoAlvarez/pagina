# Generated by Django 3.0.5 on 2020-04-23 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Obra',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=50)),
                ('poblacion', models.CharField(max_length=30)),
                ('cp', models.IntegerField()),
                ('provincia', models.CharField(max_length=25)),
            ],
        ),
    ]
