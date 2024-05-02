
document.addEventListener('DOMContentLoaded', function () {
    let qussubmit=document.getElementById('submit');
    let qusno=document.getElementById('qus-no');
    let lastpage=document.getElementById('last-page');
      let data={
        "question":[
          {"qus":"The _______ is the one in which the primary key of one relation is used as a normal attribute in another relation.",
          "option":{
              "a":"Referential relation"
          ,
          
              "b":"Referencing relation"
          ,
          
              "c":"Referenced relation"
          ,
          
              "d":"Referred relation"
          
          },
      "ans":"Referenced relation"     
      },
      {"qus":"_______ is not a category of SQL command",
      "option":{
          "a":"TCL"
      ,
      
          "b":"SCL"
      ,
      
          "c":"DCL"
      ,
      
          "d":"DDL"
      
      },
      "ans":"SCL"   
      
      
      },
      {"qus":"Which SQL keyword is used to sort the result set?",
      "option":{
          "a":"ORDER BY"
      ,
      
          "b":"SORT"
      ,
      
          "c":"ORDER"
      ,
      
          "d":"SORT BY"
      
      },
      "ans":"ORDER BY"   
      
      
      }
        ]
         
      };
        let qus=document.getElementById('qus');
        let ans1=document.getElementById('ans1');
        let ans2=document.getElementById('ans2');
        let ans3=document.getElementById('ans3');
        let ans4=document.getElementById('ans4');
        async function next(i){
            let no=i+1;
            qusno.innerHTML=`${i+1}`;
        qus.innerHTML=data['question'][i]['qus'];
        ans1.innerHTML=data['question'][i]['option']['a'];
        ans2.innerHTML=data['question'][i]['option']['b'];
        ans3.innerHTML=data['question'][i]['option']['c'];
        ans4.innerHTML=data['question'][i]['option']['d'];

        }
        qusno.innerHTML='1';
        next(0);
        let i=0;
        qussubmit.addEventListener('click',()=>{
            event.preventDefault();
            var select=document.getElementsByName('select');
            var value;
            for(let i=0;i<select.length;i++){
                if(select[i].checked){
                value=select[i].value;
                select[i].checked=false;
                break;
                }
            }
           
            if(data['question'][i]['ans']==data['question'][i]['option'][value]){
                scoreno.innerHTML=parseInt(scoreno.innerHTML.valueOf())+1
            }

            i=i+1;
            if(i!=3){
            next(i);
            }
            else{
                question.classList.remove('active');
                question.classList.add('deactive');
                score.classList.remove('active');
                score.classList.add('deactive');
                let secured=document.getElementById('secured');
                secured.innerHTML=parseInt(scoreno.innerHTML.valueOf());
                let total=document.getElementById('total');
                total.innerHTML='3';
                lastpage.classList.remove('deactive');
                lastpage.classList.add('active');
                let done=document.getElementById('done');
                done.addEventListener('click',()=>{
                    history.go(0);
                })
            }
           })
        
    

   
    let cont=document.getElementById('continue');
    let question=document.getElementById('question');
    let scoreno=document.getElementById('scoreno');
    let score=document.getElementById('score');
    let start=document.getElementById('start');
    
    console.log(parseInt(scoreno.innerHTML.valueOf())+1);
    
    let instruction=document.getElementById('instruction');
     start.addEventListener('click',()=>{
   let quiz=document.getElementById('quiz');
   quiz.classList.remove('active');
   quiz.classList.add('deactive');
    instruction.classList.remove('deactive');
    instruction.classList.add('active');
                              });
     let exit=document.getElementById('exit');
     exit.style='background-color:red';
     exit.addEventListener('click',()=>{
        instruction.classList.remove('active');
        instruction.classList.add('deactive');
     });
     cont.addEventListener('click',()=>{
        instruction.classList.remove('active');
        instruction.classList.add('deactive');
         question.classList.remove('deactive');
         question.classList.add('active');
         score.classList.remove('deactive');
         score.classList.add('active');
         
         

     })

    });