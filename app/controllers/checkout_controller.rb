class CheckoutController < ApplicationController
  def index
    puts params
    ticket = Ticket.find(params[:ticket_id])
    number = params[:ticket_count]
    nonce = params[:payment_method_nonce]
    puts "nonce----> #{nonce}"

    result = Braintree::Transaction.sale(
      :amount => (ticket.price.to_i * number.to_i),
      :payment_method_nonce => nonce,
      :options => {
        :submit_for_settlement => true
      }
    )
    @successful = false
    if result.success?
      @successful = true
    else
      @successful = false
    end
  end

  def show
  end
end
