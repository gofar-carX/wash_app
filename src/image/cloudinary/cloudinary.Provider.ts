import { v2 } from 'cloudinary';
import { CLOUDINARY } from '../cloudinary/constant';
const {CLOUD_NAME ,API_KEY_CLOUDINARY,API_SECRET_CLOUDINARY}=process.env
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: CLOUD_NAME,
      api_key: API_KEY_CLOUDINARY,
      api_secret:API_SECRET_CLOUDINARY,
    });
  },
};