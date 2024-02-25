## Inspiration
As someone who has participated in numerous hackathons and had the opportunity to judge one myself, I believe the last 3 hours of the hackathon are very daunting for both the participants and the judges.

With infinite ideas to create a project on, participants are still left with a feeling that their project has already been done before and isn't _"important"_. CodeScope wishes to help participants realize if their idea has already been used before or has similar competition. This information can be beneficial to hackers in changing or fine-tuning their ideas.

On the other hand, judges have a very daunting task of judging numerous projects at hand. With less than 10 minutes given to each project, it is surely not the judges' fault if they aren't able to inspect the code written by the participants. This, in a sense, takes away an important part of the hackathon- the code itself. CodeScope comes into play here by analyzing the code for the judges and giving relevant metrics such as creativity and plagiarism. This hack doesn't replace judges but rather aims to empower them with information that can help them make a better judgment that would be completely fair to all hackers. 

**At the end of the day, the code matters. ;)***


## What it does

We use web scraping and OpenAI to compare the project to pre-existing projects on Devpost and give relevant insights. The front end (created using react.js and next.js) can concisely portray this information in a digestible way. Among the information given about the project, openAI provides a small read-up on what the project does. Right below this would be a comparison list between projects already pre-existing on Devpost, the original project will be scored on its similarity and differences to the Devpost projects; openAI will also be providing a small read-up on said projects.

```
const generatePrompt = (description1, description2) => `[INSTRUCTIONS]
Given two text descriptions of hackathon projects, analyze and compare them for similarity across various dimensions to aid judges in making informed decisions.

—-
```
Above is an example of an openAI prompt.


## How we built it

The CodeScope project was meticulously crafted through a combination of cutting-edge technologies and strategic development methodologies. Here's a breakdown of how we brought CodeScope to life:

The user-friendly interface of CodeScope was developed using React JS. React JS allowed us to create a dynamic and responsive frontend, ensuring a seamless user experience. To gather essential information from Devpost project descriptions, we employed a robust web scraping mechanism. This process involved extracting relevant data points that form the basis for the subsequent analysis. OpenAI's ChatGPT played a crucial role in the keyword extraction process. By utilizing ChatGPT, we could effectively detect keywords from Devpost project descriptions, capturing the essence of each project. Leveraging the extracted keywords, we initiated a project similarity search.
This involved querying Devpost for projects with similar characteristics, providing us with a curated list based on relevance. Each incoming project underwent a meticulous comparative analysis.
This multi-faceted analysis examined the number of similar projects and the depth of their similarities. Post-analysis, CodeScope compiled results into an 'originality score.' This score, along with detailed explanations for the determined metrics, was presented to users in a transparent and organized manner on the frontend.

## Challenges we ran into

We wanted to use postgreSQL to store the data from openAI and the LLMS to then further populate bar graphs with information over a large set of projects. Due to a lack of time to work on it, we were not able to properly get the postgres to work.

The OpenAI key also faced multiple issues while running, and had clashes with the use of npm. It required thorough documentation reading to overcome this issue.

Not having enough time meant we weren't able to have enough solid metrics to parse the data through, however we still believe that what we have going is enough as an initial scale.

## Accomplishments that we're proud of

Getting the LLMS to work was the biggest hoop while working on this project, after hours of back and forth with open-source LLMS and VSCode, we were able to successfully get it to run. The interface is also something that we are proud of!

## What we learned

The use of openAI API keys, working with LLMS in reactjs, and conversion of front-end code to back-end js was my main takeaways from this project. I also learned a lot about node.js in general, looking at the model run made me realize how redundant some of my past hackathon project ideas were. I think this was a great learning experience, overall!

## What's next for CodeScope

We want to be able to add more metrics to CodeScope to encourage a more holistic grading approach. _*Our greatest aim would be to partner with revUC to help empower their judging process!!*_
