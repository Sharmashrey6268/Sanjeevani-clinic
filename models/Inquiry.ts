import mongoose, { Schema, models } from "mongoose";

const InquirySchema = new Schema(
  {
    parentName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },

    childName: { type: String, required: true },
    childAge: { type: String, required: true },
    gender: { type: String, required: true },

    concernType: { type: String, required: true },
    preferredDate: { type: String },
    message: { type: String },

    status: {
      type: String,
      enum: ["Pending", "Contacted", "Confirmed", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Inquiry =
  models.Inquiry || mongoose.model("Inquiry", InquirySchema);

export default Inquiry;