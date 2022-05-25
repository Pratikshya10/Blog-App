import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const TourDetails = (props) => {
    let [Tourist, setTourist] = useState([

        {
            id: "1",
            name: "kashmir",
            image: "https://tse1.mm.bing.net/th?id=OIP.iW-fa75MkWoCdmPwyJcnSwHaE7&pid=Api&P=0&w=260&h=173",

            info: "Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. ",
            date: "Tourism /25 may 2022",
            description: "Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. Every year, thousands of Hindu pilgrims visit holy shrines of Vaishno Devi and Amarnath which has had significant impact on the state's economy.",
        },
        {
            id: "2",
            image: "http://wirally.com/wp-content/uploads/2018/11/6-Reasons-To-Visit-Lambasingi-Kashmir-of-Andhra-Pradesh-This-Winter-Web.jpg",
            name: "Lammasingii",
            info: "Lambasingi is famous for its tea and coffee plantations along with little apple and strawberry farms. Moreover, the place is abounding with a variety of wildlife, flora, and fauna. ",
            date: "Tourism / 25 May 2022 ",
            description: "The region was formerly densely covered in forests and known in the past to have supported tigers. The region is known for its diversity of birdlife. Apart, this little hamlet of Lambasingi is home to an isolated tribal community. ",
        },
        {
            id: "3",
            image: "https://cdn1.goibibo.com/voy_ing/t_fs/india-goa-147105343003o.jpeg",
            name: "Goa-Holiday place to enjoy",
            info: "Goa is famous in India for a holiday destination, Goa Tourism & Travels is truly a traveler’s paradise. A perfect blend of Indian and Portuguese cultures.",
            date: "Tourism / 25 May 2022",
            description: "The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.",
        },
        {
            id: "4",
            image: "https://4.bp.blogspot.com/-j1rGJ7HQn1M/UtfKuF3yPRI/AAAAAAAAEVU/N2lUwaTodtw/s1600/alappuzha-in-kerala.jpg",
            name: "Kerala-Gods own Country",
            info: "Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia.",
            date: "Tourism / 25 May 2022",
            description: "Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad",
        },
    ]);
    let [Fitness, setFitness] = useState([

        {
            id: "5",
            image: "https://tse2.mm.bing.net/th?id=OIP.FiqbMTlxAQYypvwXzIAPqgHaDv&pid=Api&P=0&w=350&h=176",
            name: "Swimming",
            info: "Swimming is a great aerobic workout for people with most types of arthritis. It can take the load off your joints and help prevent injuries.",
            date: "Fitness/ 25 May 2022",
            description: "Swimming has many more benefits that those obvious advantages seen on the surface; its improvements to overall health go much deeper.Swimming improves muscle definition and strength. Swimmers gain muscle strength throughout the entire body.",
        },
        {
            id: "6",
            image: "https://i.pinimg.com/736x/3a/a5/5c/3aa55c890be15c659e9defc2c213bffb.jpg",
            name: "Running",
            info: "While there exists the potential for injury while running (just as there is in any sport), there are many benefits. Some of these benefits include potential weight loss, improved cardiovascular",
            date: "Fitness/25 May 2022",
            description: "Running is one of the best ways to boost your overall health. According to medical research, you can increase on your good cholesterol levels by running every day. It is also a great way to improve on lung function. ",
        },
        {
            id: "7",
            image: "https://tse2.mm.bing.net/th?id=OIP.sTv0Jzu_Q-KSV4463nvdoAHaFj&pid=Api&P=0&w=256&h=170",
            name: "Proper-Diet",
            info: "A good diet can have many profound benefits on physical appearance  Having a healthy protein and unsaturated fat intake is good for the inside as well as the outside of your body,",
            date: "Fitness/25 May 2022",
            description: "Diet (nutrition) A proper nutrition requires a proper ingestion and, also important, the absorption of vitamins, minerals, and food energy in the form of carbohydrates, proteins, and fats. Dietary habits and choices play a significant role in health and mortality.",
        },
        {
            id: "8",
            image: "https://tse3.mm.bing.net/th?id=OIP.bAZ8krlnRv66SGkTerZfWgHaE8&pid=Api&P=0&w=266&h=177",
            name: "Gym..",
            info: "Most people go to the gym to achieve physical fitness goals such as weight loss, muscle tone or increased endurance.But regularly working out at the gym can provide excellent emotional benefits, too.",
            date: "Fitness/ 25 May 2022",
            description: "A gym is a place with a number of equipments and machines used by the people to do exercises. Gymnasia apparatuses such as barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises",
        },
    ]);
    let [Technology, setTechnology] = useState([
        {
            id: "9",
            image: "https://1.bp.blogspot.com/-2G41xqhVg80/XaXvkx2z0-I/AAAAAAAAAFY/oyQM0YvdilEGm0PzKUcj6FEpkwa2GlhnQCLcBGAsYHQ/w1200-h630-p-k-no-nu/communication-digitale.gif",
            name: "Communication-Technology",
            info: "Communication is indeed rather essential in all aspects of our personal and professional life to express emotions, share information, exchange ideas and what not",
            date: "Technology/25 May 2022",
            description: "Communication technology definition Communication technology refers to all the tools used to send, receive, and process information. In today’s fast climate, efficiency and convenience are the keys to successful communication technology.",
        },
        {
            id: "10",
            image: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/job_description_template/Medical_Technologist.jpg",
            name: "Medical-Technology",
            info: "Medical Technology can be defined as the technologies that diagnose, treat and/or improve a person’s health and wellbeing.",
            date: "Technology/25 May 2022",
            description: "Medical technology includes medical and surgical procedures, drugs, equipment and facilities, and the organizational and supportive systems within which care is provided. ",
        },
        {
            id: "11",
            image: "https://tse1.mm.bing.net/th?id=OIP.4hFnQfuAVvzo4bheVeii-AHaE8&pid=Api&P=0&w=253&h=168",
            name: "Robot-Technology",
            info: "Robotics technology is a field which is related to artificial intelligence. It is the utilization of machines, operation, and designing robots for performing tasks that were done by humans",
            date: "Technology/25 May 2022",
            description: "Robots are machines that can carry out complex actions automatically. They generally need three elements: sensors such as cameras, lidar, or microphones; actuators such as motors, pistons or artificial muscles, and controllers.",
        },

        {
            id: "12",
            image: "https://tse4.mm.bing.net/th?id=OIP.9OknM8aS9y2KKawnSHDCfgAAAA&pid=Api&P=0&w=231&h=171",
            name: "Agricultural-Technology",
            info: "This technology refers to the technologies for machine production that are utilized on a farm.",
            date: "Technology/25 May 2022",
            description: " Mechanical processing of soil so that it is in the proper physical condition for planting is usually referred to as tilling; adding nutrients and trace elements is called fertilizing.application of techniques to control the growth and harvesting of animal and vegetable products",
        },

    ]);

    let [Bollywood, setBollywood] = useState([
        {
            id: "13",
            image: "https://www.nme.com/wp-content/uploads/2019/07/ST3-Production-Still-1-FEATURE-1392x884.jpg",
            name: "Stranger Things",
            info: "A further trailer was shared on November 6, showing Eleven’s new life in California. Ordinary school life soon changes when the visuals flip to a sudden barrage of gunshots, military action and a desert-set explosion. ",
            description: "Although it’s not all good news for our “American”; he is imprisoned far from home in the snowy wasteland of Kamchatka, where he will face dangers both human… and other. Meanwhile, back in the States, a new horror is beginning to surface, something long buried, something that connects everything…",
            date: 'Bollywood /25 May 2022',
        },
        {
            id: "14",
            image: "https://english.cdn.zeenews.com/sites/default/files/2022/05/23/1045604-bhool-bhulaiyaa-2-1.png",
            name: "Bhool Bhulaiyaa 2 ",
            info: "Actors Kartik Aaryan and Kiara Advani starrer ‘Bhool Bhulaiyaa 2’ has broken the dry spell of Hindi films at the box office by minting more than Rs 50 crores in the first three days of its release.",
            date: 'Bollywood /25 May 2022',
            description: " On Saturday the movie collected Rs 18.34 crore. According to early trends, the film has collected around Rs 22 to 23 crore on Sunday - making its first three days collection rise past Rs 50 crore mark."
        },
        {
            id: "15",
            image: "https://images.squarespace-cdn.com/content/v1/5d45b55d7563de000169a046/1648662793126-HNO7VYE2WDD90YG25IHL/_123677252_kfposter.jpg?format=1500w",
            name: "The Kashmir Files",
            info: "It is the first time that the plight of Kashmiri Hindus has been depicted in Hindi films, without somehow showing excuses and extenuating circumstances.",
            date: 'Bollywood/ 25 May 2022',
            description: "The Kashmir Files is nationalistic propaganda at its finest, presenting a misleading and dangerously one-sided narrative that exaggerates figures, ignores conflicting information, and obscures inconvenient truths to push a blatantly politicized agenda.",
        },
        {
            id: "16",
            image: "https://2.bp.blogspot.com/-BIJTKNdwhaQ/XBx-X0v5nAI/AAAAAAAAa34/eaBtdwgdNp4mcDEwRFDFkaIyLjvTRnkkwCLcBGAs/s1600/KGF%2BMovie%2BReview.jpg",
            name: "Kgf",
            info: "The movie dates back to 1951. Here, two incidents take place; The birth of the hero and other in the Kolar Gold Fields (K.G.F) they get gold.",
            date: 'Bollywood /25 May 2022',
            description: "Rocky soon rises in strength and power, rivaling Shetty's own. This attracts the attention of Andrews, who offers him Bombay in return for assassinating Garuda, Suryavardhan's elder son, who is to inherit KGF after his now-paralyzed father's passing.",
        },
    ]);
    let [Food, setFood] = useState([
        {
            id: "17",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1280px-Hyderabadi_Chicken_Biryani.jpg",
            name: "Hyderabadi-biriyani",
            info: "Hyderabadi biryani, also known as Hyderabadi dum biryani, is a style of biryani from Hyderabad, India made with basmati rice and meat (mostly chicken, Lamb Meat).",
            date: "Food/25 May 2022",
            description: "Originating in the kitchens of the Nizam of Hyderabad, it combines elements of Hyderabadi and Mughlai cuisines. Hyderabad biryani is a key dish in Hyderabadi cuisine.Taste is fantastic when compared to other states biriyani",
        },
        {
            id: "18",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sapaketti_phat_khi_mao.jpg/408px-Sapaketti_phat_khi_mao.jpg",
            name: "Noodles",
            info: "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.",
            date: "Food/25 May 2022",
            description: "Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
        },
        {
            id: "19",
            image: "http://3.bp.blogspot.com/-GQTDywNt4Ks/U0dX3UPasgI/AAAAAAAAhy0/V5xXKzGXx2Q/s1600/Idli.jpg",
            name: "Idly",
            info: "Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. ",
            date: "Food/25 May 2022",
            description: "Since plain idlis are mild in taste, a condiment is considered essential. Idlis are often served with chutneys (coconut based), sambar and Medu vada. However, this varies greatly by region and personal taste, it is also often served with kaara chutney (onion based) or spicy fish curries",
        },
        {
            id: "20",
            image: "https://diff.wiki/images/5/58/Roti.jpg",
            name: "Chapathi(Roti)",
            info: "Chapathi also known as roti, rotli, safati, shabaati, phulka, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal.",
            date: "Food/25 May 2022",
            description: "Chapatis are one of the most common forms of wheat bread which are a staple food in the Indian subcontinent. The carbonized wheat grains discovered at the excavations at Mohenjo-daro are of a similar variety to an endemic species of wheat still to be found in India today. ",
        },
    ]);
    return (
        <BlogContext.Provider value={{
            value1: [Tourist, setTourist],
            value2: [Fitness, setFitness],
            value3: [Technology, setTechnology],
            value4: [Bollywood, setBollywood],
            value5: [Food, setFood]
        }} >
            {props.children}
        </BlogContext.Provider>
    )
}
export default TourDetails;

