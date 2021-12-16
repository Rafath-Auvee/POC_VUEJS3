import { ref } from 'vue'
import axios from 'axios';

const getExamList = () => {
  const examList = ref([]);
  const error = ref(null);

  const loadExamList = async () => {
    try{
      const res = await axios.get('http://www.exam.poc.ac/api/list_examPack/');
      // if(!examList.ok) {
      //   throw Error('Error getting Data');
      // }
      console.log(res)
      // const list = await res.json();
      // console.log(list)
    } catch (err) {
      error.value = err.message;
      console.log(err.message)
    }
  }
  return {examList, error, loadExamList}
}
export default getExamList;