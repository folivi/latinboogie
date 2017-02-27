json.extract! booking, :id, :name, :email, :ticket_name, :quantity, :message, :created_at, :updated_at
json.url booking_url(booking, format: :json)