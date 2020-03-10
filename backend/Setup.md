# Setup

## Homebrew

**Mac**
```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Ubuntu**

Install 
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" 
```

Update PATH
```shell
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```

## Ruby Env and Ruby (macOS)

```shell
brew install rbenv
```
then 

```shell
vim ~/bash-profile
```

Paste the following into the vim ('i' to insert. CMD+V to paste. Escape Key. then :wq to save and quit.)

```shell
eval "$(rbenv init -)"
```

Quit Terminal and reopen a new Terminal.

Run the following to verify you did it correctly.

```shell
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

*Expected Output:
*
```shell
Checking for `rbenv' in PATH: /usr/local/bin/rbenv
Checking for rbenv shims in PATH: OK
Checking `rbenv install' support: /usr/local/bin/rbenv-install (ruby-build 20170523)
Counting installed Ruby versions: none
  There aren't any Ruby versions installed under `~/.rbenv/versions'.
  You can install Ruby versions like so: rbenv install 2.2.4
Checking RubyGems settings: OK
Auditing installed plugins: OK
```


**Install Ruby**

```shell
rbenv install 2.6.5
```
Once complete, run the following:

```shell
rbenv global 2.6.5
```

## Rbenv & Ruby (Ubuntu)
https://medium.com/@sourav.moitr/installing-rbenv-and-ruby-on-ubuntu-16-04-cc9471d2674e

## Rails 6.0.2 and Postgresql

Mac users on Catalina need to follow the instuctions on
https://gorails.com/setup/osx/10.15-catalina

for Mojave:
https://gorails.com/setup/osx/10.14-mojave

for Ubuntu:
https://gorails.com/setup/ubuntu/19.10


1. If yours is not listed above, click any link above and select your version of macOS then follow the instructions starting from the "Installing Rails" section. You will be installing Rails 6.0.2. Replace all the rails versions in the guide with 6.0.2.
2. Scroll down an also follow the instructions on how to install PostgreSql. Do not set a username or password for the postgresql. Leave it to the default. The defualt is username root with no password.


## Clone the Food-Delivery-App

Clone this repo. Once completed navigate to the project folder in Terminal the run the following:

```shell
bundle install
```

Then run

```shell
rbenv local 2.6.5
rake db:create
rails db:migrate RAILS_ENV=development
rails server
```

The above code sets the ruby version of the project folder to 2.6.5 then initilizes the database. We then use rails to create the tables based on the create table script located in db/migrate and set it the environment to development (not production). Lastly we run the rails server to test the application.


Navigate to http://localhost:3000/api/v1/admins/customers on your browser and see if it returns an empty array 

```ruby
[ ]
```

If it does, you did it!





