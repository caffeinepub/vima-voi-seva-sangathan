import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compareByTimestamp(msg1 : Message, msg2 : Message) : Order.Order {
      Int.compare(msg2.timestamp, msg1.timestamp);
    };
  };

  var nextId = 0;
  let messages = Map.empty<Nat, Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, messageContent : Text) : async () {
    let message : Message = {
      name;
      email;
      message = messageContent;
      timestamp = Time.now();
    };

    messages.add(nextId, message);
    nextId += 1;
  };

  public query ({ caller }) func getMessages() : async [Message] {
    messages.values().toArray().sort(Message.compareByTimestamp);
  };

  public shared ({ caller }) func deleteMessage(id : Nat) : async () {
    if (not messages.containsKey(id)) {
      Runtime.trap("Message does not exist");
    };
    messages.remove(id);
  };
};
