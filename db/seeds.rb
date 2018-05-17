# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.create!(title:'Get a job',content:"Ruby Notes

   
% and char   text any char .. escapes

hash (object_
: or =>

access with [] not .

myArray.map { |item| item *2 }
myArran << same as push (onto end)
do
end
  or {}

(& :method for map)
Capitalised = constant Ben Blah
49a0BDpUKfBp51Al3VDTwi

=~ regex match
b? (b is optional)

p print inspect

ctrl r reverse
ctrl a and e end
esc del del block
esc . last history
open . open finder or open file


TRAVIS CI CONTINUOUS INTERGRATION
CIRCLE CI
COVERAGE

Check operator precidence

array accessor / send [“”]
thing.send(:method)
.find_index(array), indexof in js

def inspect (called by p) gives you instance variables by default, but you can reformat the displaying
x & y
[1,2,3]
[2,3,4]
2,3

.flatten (concat 2 arrays)
(a1 << a2).flatten (rather than add to element of other array)

SQL 
DISTINCT
GROUP BY
sum, count, min, max

SELECT * 
FROM employees
JOIN salaries ON employees.emp_no = salaries.emp_no 
WHERE 
  employees.emp_no = 10001;
  
SELECT * FROM employees, salaries WHERE employees.emp_no = 10001 AND salaries.emp_no = 10001;

DELETE 
SELECT
  employees.first_name,
  employees.last_name,
  departments.dept_name
FROM
  employees
JOIN
  dept_emp ON employees.emp_no = dept_emp.emp_no
JOIN
  departments ON departments.dept_no = dept_emp.dept_no
LIMIT 10;
var obj = {
    a: {b: ['Value One', {c:'Target Value'}]}
}
console.log(safe(obj,'a.b[1].c'))

ifconfig (get ip)

telnet ip port
postb.in

padrino g project spotifydb -d activerecord -t rspec -e erb -c sass
bundle --binstubs
rake -T list all commands
rake ar:create create database
rake ar:migrate migrate database
RACK_ENV=test rake ar:create
padrino g migration

rake ar:drop && rake ar:create && rake ar:migrate (nuke)
rake routes
RACK_ENV=test rake ar:migrate (does it on test)
movie.valid?



expect(last_response.body).to include 'Rambo'
expect (last_response).to_ be_ok

expect (last_response.status).to eq(305)
gem install database_cleaner
# :csrf_protection => false

form_for @movie, 'movies' do |f|
f.error_messages
f.label :title
f.text_field :title (text field is transferred)
f.label :year,
f.text_area :description
get :index, with => :id
end
%p paragraph tag

Git
git log
git diff
git push / git push origin
git remote add upstream https://github.com/bjpirt/git-demo.git
git checkout master
git checkout -b (create branch and checkout)
git pull upstream master
git branch -l (-al with hidden) list
git branch -d branch delete
git push -u origin readme (branch name .. push branch to origin)
git push origin
:qg vim
git rebase master
git rebase --continue
q escape pager
git push origin -f (after resolving conflict)

git remote add upstream https://github.com/amdkfe/gochef.git
git fetch upstream
git pull upstream master

Jekyll
bundle --binstubs (make sure comman is in place path can find it)
jekyll serv

css reset
mixins
style inline
style = {
}

Block - H, P
<section><article><header><footer><main><aside><nav><time>

inline - Span, href, strong, italic, b, i (em is better), img src, list (ul with li, ol)
list-style-type: none;
form (search?) disabled
png (faded), gif transparent
(svg)

Box
Padding inside
Margin outside
border, inbetween margin and padding
box-sizing (content box / 
        border-box)
content box specify that width and height are inner
border box specify include border and padding

display .. block /inline
display: inline-block;
inline - block (affected by rows of text)
100vh (100% of viewport height)
:hover
transition: background-colour 0.5s (ease) (cubic bezier);

position: relative (to parent)
fixed/sticky

display:flex
flex-wrap:wrap (move around)
flex-direction: column (or row)
justify-content: space-between;optional
align-items:centre (stretch with no height goes full height)
.one{
order: 2;
}
.two{
order: 3;
}
flex-grow: 3(relative to total so if you had two 1s 3 would be 3 of 5 coverage)

GRID

display:grid
grid-template-columns: 200px auto 150px;
grid-template-rows: 200px auto 150px;

in div
grid-area:info  
grid-area: 1 / col4-start/last-line/6
@media (max_width: 900px){

.parent .child (affects child OF a parent)
.parent>.child (only immediately below)
+ next sibing
~ all siblgings after in dom
.one, .two (seperate but apply rule to both .. comma)


git stash / git stash pop
git reset HEAD

config t

builder - form for
helper 

MVP Minimum viable product (the lean startup)

Rails

rails new gochecf (remove coffeescript)
rails s
add gem devizes then bundle install
rails generate devizes install
copy config file

rails routes/ rake routes, rails console
devizes auth
rails db:migrate
rails g controller users
rails g migration name_of_file
new_user_session_path (found through rake routes)
validates give you a user friendly exception
MyModel.attribute_names

get '/users/:id', to: 'users#show', as: 'user'
rails g system_test homepage (driven_by :rack_test) capybara

flash[:notice] or :error = 

$ RAILS_ENV=production bin/rails assets:precompile
Partials - Rails Layouttt

resources :users do  do
    resources :images except [:new, :edit] 
end

html proofer

begin


rescue
flash or whatever
end

chosen - TAB library
Rails setup https://gist.github.com/ryanflach/9fe657471bc9282a18d6904171645278
rails new <project_name> -d postgresql --skip-turbolinks --skip-spring --skip-coffee -T
rails g scaffold_controller users
class Employee < ActiveRecord::Base
has_many :subordinates, class_name: “Employee”, 
                        foreign_key: “manager_id”

belongs_to :manager, class_name: “Employee”
end
has_many :reviews, -> { order(created_at: :desc) }

DEVISE PERMITTED PARAMETERS (APP CONTROLLER)
before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys:
      [:name, :location_lat, :location_lon, :email, :password,
      :password_confirmation, :current_password, :radius] 
    )
    devise_parameter_sanitizer.permit(:account_update, keys:
      [:name, :location_lat, :location_lon, :email, :password,
      :password_confirmation, :current_password, :max_party_size,
      :price_per_head, :bio, :will_travel, :avatar, :radius]
    )
  end
JOIN TABLE!
rails g migration CreateJoinTableProductsSuppliers rooms users

RAILS remote (for forms) read up (ajax send rails form)
.iso8601 - no space time

action cable (websocket frame inspection in chrome?)
rails general channels


",tags:"coding")
Note.create!(title:'Groceries', content:"Shopping List\n\nCarrots\nCucumber\nBiscuits\nGolden Capabara crisps\n", tags:"groceries")
Note.create!(title:'Dubplates', content:"Dubplates\n\nNew diplo thing\nGTA - Bootybash\nRedlight single\nThe Feeling VIP\n", tags:"groceries")
Note.create!(title:'Get a job', content:"Work Notes\n\nFind a group of potential legends and join.\nWrite a CV\nStart running again\n", tags:"groceries")
Note.create!(title:'Emilys Birthday', content:"Emily's Birthdays\n\nGet Cake\nBook restaurant\nCall Jade and Beccy\nOrder Capybara\n", tags:"groceries")