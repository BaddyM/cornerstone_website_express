const express = require("express");
const path = require("path");
const cors = require("cors")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors({
    origin:"*"
}))

//Add static files
app.use('/images', express.static(path.join(__dirname, '/images')));

app.get("/events", async (req,res) => {
    const allEvents = await prisma.events.findMany();
    res.send(allEvents);
});

app.get("/add_data", async (req, res) => {
    await prisma.events.create({
        data : {
            event: "Mid Term Exams",
            period:"8:00 - 17:00",
            date:"2025-02-10"
        }
    })
});

app.get("/news", async (req, res)=>{
    const school_news = await prisma.news.findMany();
    for(let i=0; i<school_news.length; i++){
        school_news[i].image = `/images/news/${school_news[i].image}`;
    }
    res.send(school_news);
});

app.listen(PORT,()=>{
    console.log(`Listenting to port ${PORT}`);
})