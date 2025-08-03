# Converting Keras model (.h5) to TensorFlow.js format

To convert your Keras model (model.h5) to TensorFlow.js format, follow these steps:

1. Install the TensorFlow.js converter tool globally (if not already installed):

```
pip install tensorflowjs
```

2. Run the conversion command:

```
tensorflowjs_converter --input_format=keras model.h5 tfjs_model
```

This will create a directory `tfjs_model` containing the model.json and binary weight files.

3. Copy the `tfjs_model` directory into your Next.js project's public folder (e.g., `public/tfjs_model`).

4. In your frontend code, load the model using TensorFlow.js browser API:

```typescript
import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('/tfjs_model/model.json');
```

5. Preprocess input images to match the model's expected input shape and normalization.

6. Run prediction using the loaded model.

---

This approach allows running inference entirely on the client side without backend dependencies on '@tensorflow/tfjs-node'.
