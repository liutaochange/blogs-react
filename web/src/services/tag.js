import axios from '@/base/fetch'
import { GET_TAGS_URL } from './interface'
export const get_tags = async () => await axios.get(GET_TAGS_URL)
