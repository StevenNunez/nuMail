class MessagesController < ApplicationController
  def index
    render json: Message.all
  end

  def create
    safe_message = params.require(:message).permit(:body, :subject)
    @message = Message.create(safe_message)
    render json: @message
  end
end
