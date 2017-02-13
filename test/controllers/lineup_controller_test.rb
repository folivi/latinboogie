require 'test_helper'

class LineupControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lineup_index_url
    assert_response :success
  end

end
