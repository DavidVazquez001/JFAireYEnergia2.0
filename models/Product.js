// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        mainCategory: String,
        category: String,
        subcategory: String,
        subcategoryDescription: String,
        features: [String],
        introduction: String,
        dataSheet: {
            model: String,
            coolingCapacityL35L35: String,
            voltage: String,
            ratedPowerL35L35: String,
            ratedCurrent: String,
            powerConsumptionL35L35: String,
            coolingCapacityL35L55: String,
            powerConsumptionL35L55: String,
            internalAirflow: String,
            circuitMaxPressure: String,
            refrigerant: String,
            heatingPower: String,
            workingTemperature: String,
            noise: String,
            weight: String,
            ipGrade: String,
            dimensions: String,
        },
        applications: [String],
        images: [String], // Array of URLs
    },
    {
        collection: 'products',
    },
);

export default mongoose.models.Product ||
    mongoose.model('Product', productSchema);
