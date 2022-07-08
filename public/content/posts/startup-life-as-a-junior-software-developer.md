---
title: Startup Life as a Junior Software Developer
slug: startup-life-as-a-junior-software-developer
date_published: 2020-03-20T12:00:00.000Z
date_updated: 2020-09-30T23:30:10.000Z
tags:
  - Software Development
  - Career
excerpt: My experience working at a startup as a junior software developer.
---

Entrepreneurship became more and more appealing to me after I decided to transition to a career in tech. I'm a frequent reader of Hacker News, and I listen to tons of podcasts about people sharing stories on scaling an early idea to a successful product or service. It helps that Montreal — the city where I currently reside — has a vibrant and growing startup ecosystem.

Despite my interest and access to startups, I figured that joining a startup as a junior software developer would be problematic from an experience standpoint. Initially, I wanted to join a larger company and gain valuable knowledge. Then, I thought, I could apply to a startup and have a greater impact.

My first job out of bootcamp was at a startup.

Since I recently took a new opportunity, I figured that it would be a good time to share what I've learned over the past 10 months working at a startup as a junior developer. It's worth mentioning that these points are not all encompassing — they simply reflect my own experience working at a startup (outside of the Bay Area) with little development experience.

## You'll quickly contribute to features and have an impact on the product you're working on
![](/content/images/2020/03/fogg-success-1.png)Illustration by [ouch.pics](https://icons8.com)
At a startup, there's a greater chance that you'll contribute full-fledged features to the product that the team is building. And early on. Junior developers are often tasked with squashing bugs, writing tests, or making small adjustments to the application. While these are all important tasks, working on a new feature — especially as a junior — feels awesome. You get the impression that you're *useful* and having an impact on your team and the product.

The first job that I was tasked with was *building a portal to host other client applications*. From scratch. Talk about an early impact! Once the prototype for that was done, I joined another team working on one such client application. While it took some time to get into it, I was contributing features like my fellow teammates before I knew it.

It can be stressful working on full features as a new developer. But you learn a *ton* about how the application actually works, and being a primary contributor to building out an application feels great too.

## You may write less tests
![](/content/images/2020/03/image-1.png)Source: [Reddit](https://www.reddit.com/r/ProgrammerHumor/comments/9ktyur/another_unit_testing_meme/)
I realize that this point is controversial and very possibly biased. Nevertheless, I am assuming here that there are plenty of startups that choose to move quickly and churn out features, all the while — knowingly or unknowingly — failing to implement unit, integration, and/or end-to-end tests.

While members of my team wrote some back-end tests in C#, our front-end testing was lacking to say the least. We replaced Angular's base testing frameworks with Jest and Cypress, but that's about it. It didn't help that we struggled to configure Cypress to work with the *core* drag-and-drop functionality in our application.

Most would argue that automated testing is an important component to building software. But you may find that at a small company that wants to move fast that it's overlooked until it's too late.

## You'll be able to develop an early product mindset

Gergely Orosz has a great [article on product-minded software engineers](https://blog.pragmaticengineer.com/the-product-minded-engineer/#tips-to-become-a-more-product-minded-engineer). He explains that developers with a product mindset "want to understand why decisions are made, how people use the product, and love to be involved in making product decisions".

Working at a startup as a junior developer gives you the opportunity to build a product mindset early on in your career. In a small team, you can ask a lot of questions about the product. Since you'll be working closely with a product owner, you can more easily contribute ideas on solving certain client pain points.

## You'll gain full stack exposure

> "full-stack" now means you can:
> 
> build front-ends
> write back-ends
> handle devops
> start a podcast
> curate a newsletter
> crack an egg with one hand
> animate a Pixar movie
> dunk
> &mdash; I Am Devloper (@iamdevloper) [June 5, 2019](https://twitter.com/iamdevloper/status/1136194197814272001?ref_src=twsrc%5Etfw)

Do all the things!
The role of "full-stack" developer has seen its share of criticism. Yet Caleb Kaiser of AngelList argues that [full-stack really means early-stage](https://angel.co/blog/what-skeptics-get-wrong-about-full-stack-engineers-and-why-we-need-them). When you join a startup as a junior developer, you'll gain exposure to many technologies on different parts of the stack.

While I did focus a lot on front-end development at Square Lab, here's a list of some the technologies we used:

- **Angular 6+** and, as a result, **TypeScript**.
- **.NET Core** framework for **C#**.
- **GraphQL** with **Apollo**. We also implemented real-time with **GraphQL Subscriptions**.
- **RabbitMQ** for message queuing.
- **Redis** as an in-memory data store.
- **Docker**, **Kubernetes**, and **ArgoCD** for containerization and deployment.

Did I use, or even fully understand, all of these technologies? Absolutely not. But by virtue of working at a startup, I have become familiar with a diverse set of tools that contribute to the building and deployment of a modern application. I can do research on my own, or ask my colleagues how we use them to accomplish specific business or product objectives. In fact, exposure to many of these tools and technologies prompted me to purchase Andrei Neagoie's [Complete Junior to Senior Web Developer Roadmap](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap) course on Udemy. My experience at work made me realize the importance of learning what these technologies aim to accomplish.

At a larger company, there's a greater chance you'll focus on one specific part of the stack. But at a startup, you'll be tasked with more work that involves different technologies. This can help accelerate your learning and grant you exposure to tools you may not otherwise have had by working at a more established company.

## You'll need to figure out a lot on your own
![Man with his head down at his desk in front of a computer](/content/images/2020/03/mixkit-exhausted-man-in-front-of-a-computer-with-his-head-69-original.png)
A smaller team generally has less available resources to help you ramp up as a junior developer. What does that mean, exactly? Well, it likely means that you'll need to dive into the codebase without anyone to help you navigate your way around it.

As I briefly mentioned earlier, my first task on the job was to build the prototype of a new application. Its purpose would be to host other client applications within it as iframes — basically, a client portal. Truth be told, I was pushing code directly on the develop branch *mostly* without anyone reviewing my work. It was stressful and I think I would have benefited from more direct assistance. At the same time, I did learn a lot while building it.

The point here is that you may be thrown into an unfamiliar scenario without much direct mentorship. At a startup, you have the opportunity to learn a *ton* quickly. But you may need to get comfortable being uncomfortable for a while before you begin to ramp up.

## You'll experience the ups and downs of working closely with a small group of people
![Illustration of team working together](/content/images/2020/03/undraw_work_together_h63l.svg)
By the very nature of working at a startup, you can build great relationships with a close group of people. I loved working with my team, and it's the thing I'll miss most about Square Lab. My teammates had great technical knowledge and were happy to answer any and all questions I had, which ranged from why we implemented a feature in a certain way to wrapping my head around a technical concept. Outside of my immediate squad, I had a blast at our frequent after-work gatherings or playing video games with my colleagues over lunch hour.

On the other hand, a small team also means that it becomes imperative that everyone plays nice. In larger companies, it's easier to avoid or ignore toxic and negative individuals. That's not quite the case at startups.

Even if you get along with everyone, it's worth mentioning that conflicts and disagreements between other employees spread quickly within a small organization. If it gets bad enough, the atmosphere at the office starts to deteriorate and the morale of the team spirals downward. All because some of your colleagues couldn't tolerate each another in a small enough team.

Hiring the right people that fit the startup's culture and values is thus incredibly important early on.

## Is working at a startup as a junior developer a good idea?

Initially, I didn't think so. During my first few months I felt overwhelmed and, quite frankly, in over my head.

But as I got settled in with a new team and learned to lean on them for help, things started to improve. I learned an incredible amount in less than a year. I believe that working at a startup helped enable that.

As someone initially hesitant towards joining a startup as a junior developer, I hope that this post helps you get a feel for what the experience was like for me, and what it could be like for you.
