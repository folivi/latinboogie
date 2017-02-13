require 'test_helper'

class VenueControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get venue_index_url
    assert_response :success
  end

end
