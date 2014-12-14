class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body, :recipient

  def recipient
    "Steven"
  end
end
