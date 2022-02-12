const Event = require('../Schema/Event')
const resolver = {
    Query:{
        async events(){
            try{
                const Events= await Event.find();
                const Polls=[]
                for(i in Events){
                    let Poll = {}
                    let votesArray = []
                    let votersArray = []
                    let votesObj = {}
                    for( j in Object.keys(Events[i])){
                        if( j>7){
                            votersArray.push(Object.keys(Events[i])[j])
                        }
                    }
                    for(k in votersArray){
                        votesObj= {}
                        votesObj['voters'] = Events[i][votersArray[k]]
                        votesArray.push(votesObj)
                    } 
                    Poll['title']=Events[i].title
                    Poll['text']=Events[i].text
                    Poll['competitors']=Events[i].competitors
                    Poll['createdAt']=Events[i].createdAt.toString();
                    Poll['deadline']=Events[i].deadline.toString();
                    Poll['votes']=votesArray
                    Polls.push(Poll)
                    
                }
                console.log(Polls)
                return Polls;
            } catch(err){
                throw new Error(err)
            }
        }
    }
}
module.exports = resolver