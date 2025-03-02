import Doctor from "@/app/models/Doctor";
import Field from "@/app/models/Field";

export const resolvers = {
  Query: {
    doctors: async (_, { filter }) => {
      let query = {};
      if(filter) query = filter;
      return await Doctor.find(query);
    },
    doctor: async (_, { id }) => await Doctor.findById(id),
    searchDoctors: async (_, { query }) => {
      console.log("searchDoctors", query);
      try {
        const doctors = await Doctor.find({
          $or: [
            { firstName: { $regex: query, $options: "i" } },
            { lastName: { $regex: query, $options: "i" } },
            { email: { $regex: query, $options: "i" } },
            { field: { $regex: query, $options: "i" } },
          ],
        });

        return doctors;
      } catch (error) {
        console.error("Error searching doctors:", error);
        throw new Error("Failed to search doctors");
      }
    },
    searchFields: async (_, { name }) => {
      if(name) {
        return await Field.find({ name: { $regex: name, $options: "i"} });
      }
      return await Field.find();
    }
  },

  Mutation: {
    addDoctor: async (_, { firstName, lastName, email, gender, phone, affiliates, address, acceptingPatients, image }) => {
        const newDoctor = new Doctor({firstName, lastName, email, gender, phone, affiliates, address, acceptingPatients, image });
        await newDoctor.save();
        return newDoctor;
    },

    addField: async (_, { name }) => {
      const newField = new Field({ name });
      await newField.save();
      return newField;
    }
  },
};
