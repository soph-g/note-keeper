require 'sinatra/base'
require_relative 'data_mapper_setup'
require 'json'

class Server < Sinatra::Base
  get '/' do
    'Hello Server!'
  end



  post '/notes' do
    Note.create(content: params[:content])
  end

  get '/notes' do
    notes = Note.all
    return notes.to_json unless notes == nil
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
