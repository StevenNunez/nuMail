class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body
end
