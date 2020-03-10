# README

This is a food delivery monitoring system set up with Ruby on Rails configured with PostgreSQL database.

### Get the necessary installs out of the way:

* First you need to [install Ruby](https://www.ruby-lang.org/en/documentation/installation/) on your computer. Rails requires Ruby versions 2.5.0 or later.

* To install Rails, run the command `gem install rails` provided by RubyGems.

* In addition, you may also need to run `gem install pg`.

* Install [PostgreSQL](https://www.postgresql.org/download/) on local computer. For example, on MacOS you can install with `brew install postgresql`.

* To see complete setup guide, see [Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html).

### Database setup

* You may need to start the Postgres server if not done so. For example, run the command `brew services start postgresql` in terminal on MacOS.

* Open the terminal, run the command `psql postgres` to enter the PostgreSQL console.

* Enter the command `create role fds with createdb login password 'password1';` to create new user for FDS application in your local PostgreSQL database. You can check the user table by entering `\du`.
 
* Type in `exit` to exit the PostgreSQL console.

* In a new terminal, navigate to the project folder. Run the command `rake db:setup` to create the relevant database for the application.


### Run the Rails application:

* Navigate to the project folder, type in terminal `rails server`.

* Then open the browser, navigate to `localhost:3000`. You should see the Rails landing page.

### Design document:

* We summarise the application design, DB design in the [Google Doc](https://docs.google.com/document/d/1tIBgZZzccAGrz6OgO2Ob90ntAWP7Qoxmuoit9pwb398/edit?usp=sharing) (view only).

