var button = $('button');
button.on('click', fullEmail);
var container = $('.container');

function fullEmail ()
{
  event.preventDefault();
  var name = $('.name').val();
  var name1 = $('.name1').val();
  var cityState = $('.city-state');
  container.append(`<p> Here is your final email! </p>`); 
  container.append(`<p> Subject Line: Public safety for women </p> 

    <p> Hello! </p> 

    <p> My name is ${name} and I am a resident of ${cityState}.</p> 

    <p> <a href = "https://www.cairn-int.info/article-E_POPSOC_550_0001--young-women-in-large-cities-are-the.htm#:~:text=Sexual%20assaults%20are%20most%20frequent%20in%20public%20space%20%E2%80%93%20generally%20groping,of%20men%20aged%2020%2D69."> "Sexual assaults are most frequent in public space with 7.9% of women and 2.2% of men being affected at some time in their lives." </a> </p> 

    <p> Having and iplementing safe cities and safe public spacies are crucial for women to feel secure when in an outdoor environment. Public spaces hold terrifying environments for women that include sexual remarks, cat-calling, rape, and femicide. These instances can occur in places as little as public bathrooms and transportation, to public schools and workplaces. These conditions degrade women's mental health, physical well-being, and general health. </p> 

    </p> The following are policies that you can endorse and/or work to implement: </p> 

      <li> providing extra provision against abuse and harassment in public environments </ii> 
      <li> increased protection and safety for women in public transportation and markets/public stores </li> 
    
    <p> These changes have to be made quickly and promptly, and you have the ability to make them. Make this city safe for our women and our younger generations. </p> 


    <p> Sincerely, </p> 
    <p> ${name1} </p>`);
}