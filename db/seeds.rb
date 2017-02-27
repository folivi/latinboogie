# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ticket.delete_all
Ticket.create(
  [{
    name: 'Party pass',
    description: "Includes the 2 parties on Friday and Saturday",
    price: "15"
  },
  {
    name: 'FULL PASS',
    description: "Includes the 2 parties on Friday and Saturday and the 2 workshops,  and 2 soft drinks on the house ;)",
    price: "25"
  },
  {
    name: 'SINGLE PARTY WITH WORKSHOP',
    description: "Friday or Saturday Party including the show(s) and the workshop",
    price: "15"
  },
  {
    name: 'SINGLE PARTY',
    description: "Friday or Saturday Party including the show(s)",
    price: "10"
  },
]

)
