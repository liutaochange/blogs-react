import axios from '@/base/fetch'
import { GET_TAGS_URL } from './interface'
export const GET_TAGS = async () => await axios.get(GET_TAGS_URL)
