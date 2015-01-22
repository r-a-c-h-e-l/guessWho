require "HTTParty"
require "pry"

def guess(url,root)
  request = HTTParty.get(url)
  if request.keys[0] == "incorrect"
    puts request
    guess_again = gets.chomp.downcase.gsub(" ","_")
    pre_request = "/#{guess_again}"
    url = root+pre_request
    guess(url,root)
  elsif request.keys[0] == "correct"
    puts request
  end
end

puts "Let's play Guess Who?...!"
root = "http://localhost:3000"
url = root
request= HTTParty.get(url)
response = request["results"]
response.each do |key,value|
  puts "#{key}: #{value}"
end
guess = gets.chomp.downcase.gsub(" ","_")
pre_request = "/#{guess}"
url = root+pre_request
run = guess(url,root)
