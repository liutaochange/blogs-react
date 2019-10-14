import axios from '@/base/fetch'
import { GET_CATEGORIES_URL } from './interface'
export const get_category = async () => await axios.get(GET_CATEGORIES_URL)
