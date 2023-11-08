# README
### HTTP 418
### The Tea Spot

## Contents of this file

- Requirements
- Database setup/Running Locally (in Laragon)

## Introduction


## Requirements

- phpMyAdmin (https://files.phpmyadmin.net/phpMyAdmin/5.2.1/phpMyAdmin-5.2.1-all-languages.zip)
- Laragon 

## Database setup/Running Locally (in Laragon)

- Install laragon 
- Download phpMyAdmin 
- Change the name of "phpMyAdmin-5.2.1-all-languages" to "phpMyAdmin"
- Extract phpMyAdmin to laragon/etc/apps 
- Start laragon
- Set root folder to project root folder
- Open database
- Credentials:
  - Username = root 
  - No password 
- Create a new database called "teaspot"
- Select database "teaspot"
- Select the import option and import teaspot.sql from DB/teaspot.sql
- Click 'Web' button to launch

-Admin credentials:
  - Username: admin
  - Password: admin


All php files will need to be opened in phpstorm or laragon via right click web->www->folder.
keep in mind that your server will have to be started in order to view our pages.
