const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'ENTER A VALID EMAIL']
    },
    thoughts: [
        {
            //type: Schema.Types.ObjectId,
            //ref: 'Thought'
        }
      ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    { 
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

  const User = model('User', UserSchema);

  UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
  
    // export the User model
  module.exports = User;