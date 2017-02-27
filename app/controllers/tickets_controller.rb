class TicketsController < ApplicationController
  require "braintree"
  BraintreeRails::Configuration.environment = :sandbox
  BraintreeRails::Configuration.logger = Logger.new('log/braintree.log')
  BraintreeRails::Configuration.merchant_id = "zsyrstvsjmvxr3km"
  BraintreeRails::Configuration.public_key = "w98s6hgm2ryvb4k5"
  BraintreeRails::Configuration.private_key = "6413d259c94d454b1ca293f46f931fb2"

  def index
    @tickets = Ticket.all
    @booking = Booking.new

  end

  def show

  end

  def edit
  end
end
