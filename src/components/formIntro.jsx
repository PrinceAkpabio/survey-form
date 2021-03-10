import React from 'react';
import { useHistory} from 'react-router-dom';
import { form } from "../data";
import useLoadingHook from '../hooks/loadingHook'

import SkeletonCard from './skeletonCard';
import CustomButton from './custom-button/custom-button.component';

const FormIntro = () => {
 const {data, loading} = useLoadingHook(form);
 const history = useHistory();
 return (
<>
  {
   loading ? <SkeletonCard /> :
  <div className="formpage component">
   <h3 className="form-title">{data?.title}</h3>
   {
    data.intro?.map((paragraph, i) =>(
     <p key={i}
     className="input-group"
     >{paragraph}</p>
    ))
   }
   <CustomButton onClick={()=> {history.push("/form")}}>Next</CustomButton>
  </div>
  }
</>
 )
}

export default FormIntro
