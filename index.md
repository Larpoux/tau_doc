---
title: "Dank u Overview"
keywords: danku, dank u, dyglot, super memo, leitner, classroom, anki, danku-web
tags: [overview,getting_started,role,classroom,price,license,platform,anki,dyglot,super_memo,danku_web,multilingualism]
sidebar: mydoc_sidebar
permalink: index.html
summary: Getting started with the the Dank u Project. 
---

{% include image.html file="danku27.png"  caption="The Dank u Project" %}

### Dank u

Dank u is an application for managing flash cards.

Dank u allows several algorithms for this management :

- [Leitner](https://en.wikipedia.org/wiki/Leitner_system)
- Super Memo [SM-2](https://en.wikipedia.org/wiki/SuperMemo)

Other third parties algorithms can me added as Dank u plugins.

### Supported plateforms

Danku can be run :

- Danku-web  
  - run on the web inside an internet broser
  - PWA (as a Progressive Web Application)
- Danku-native
  - Linux
  - MacOS
  - Windows
  - Android
  - iOS

There is not major differences between Danku-web and Danku native.

### The classrooms databases

A classroom is mainly composed with a set of flash cards.
Those cards can be anything.

We can have :

- a classrooms to learn a foreign language
- a classroom to learn the highway code
- a classroom to study music
- a classroom prepare an exam about phylosophia
- ...

Anything that can be put on flash cards.
Those cards can optionally contains :

- recorded sounds
- short video

Classrooms are completely data-proof : when a user enters a classroom he/she does not have any access to other classrooms.
For example when a student enters the Korean classroom he/she does not have any possibility to access cards about Esperanto.
If he/she wants to lean Esperanto he/she must close the Korean classroom and then enter the Esperanto classroom.
He/she cannot be in two classrooms at the same time.

The classrooms can be :

- open (the student enters the classroom)
- deleted by the teacher
- downloaded
- saved as a backup on iCloud or Dropbox
- Released as a shared classroom

A student can enter various classrooms :

- some classrooms are developed by third parties and are shared among many students
- some classrooms are downloaded from internet
- some classrooms are prepared by the user taking a teacher Role
- some classrooms are imported from Dyglot
- some classrooms are imported from Anki

### The context databases

All the student's work is recorded in private databases linked to the classrooms. We call this database a *context database*.
The context databases are private to the student.
Jean and Joe do not share any of their private data, like `card annotation`, `flag`, `filters`, `parameters`, ...
All those data belongs to a specific student and a specific classroom.

Jean cannot access her context database for Esperanto when she is learning korean.
For each student, classroom and context database form a couple (classroom,context).

In other word, the Jean's context database for Korean is the write side of the Korean classroom for her.
The Korean classroom itself being read-only.

Thoses SQLite databases can be managed by the student directly from his OS (Except on iOS, of course).
The student can also backup and restore them on iCloud, Dropbox or Google Drive.
Those backups can be either :

- SQLite databases
- CSV or TSV files
- JSON format

The student can backup or restore those data on iCloud, Dropbox or Google Drive as SQLite databases, CSV or TSV, or JSON.
Danku does not try to keep those backups updated. The student is responsible to do his/her backups himself/herself.

The context databases are kept locally either :

- as an IndexedDB database 
- as a sqlite database

If the student is online, then Dank u keep synchronized the remote data (Firebase or Postgresql).

When the student run Danku on line, he/she can switch from one device to another transparentely.
He/she is disconnected from a previous device each time he/she connect on a new device.

### Students

Students list is kept locally inside the App local storage.
For example on a linux machine, this list will be managed in the Linux Dank U storage independantly of the Chromium Dank U storage:
the Chromium Dank u will be managed independantely of the Firefox Dank u.

Dank u keep also in the local storage, the last student connected, and the last open classroom

There are two kinds of students :

- Pure local students
- Remote students

When Dank u is started the first time, a list of a dozen local students is created and one of those students is randomly selected.
After this first run, when Dank u is started, the previous selected student is selected again.

Then, the student enters the last classroom.
If this classroom is not accessible, then a dialog box message is shown to the user, and the user enters automaticaly one of the local classrooms.
If no local classroom exists, then a new empty local classroom is created, and the user run in Teacher Mode.

During this startup, if the student is a remote student and the classroom is also remote, Dank u try to remotely login him.
If this login is unsuccessful, and the student was previously logged-in remotely, a Dialog Box is shown to warn that the student is no-more online.
On the contrary, if the login is successful and the student was previously logged-off, a Dialog Box is shown to ask the user if
the student must go online, or stay offline.

When a student goes online, the last modification date of the remote context is compared with the last modification of the local context.
If the remote contexte is prior the local context, Dank u ask the user if it must upload the local context.
If the local context is prior the remote context, Dank u ask the user if it must download the remote context.

During the student session, the context is kept in RAM.
Every modifications of this context are written inside the local context.
If the student is running on-line, those modification are also kept in the local context.

{% include note.html content="This is very different that what Anki-web does. Anki-web does not keep synchronized the remote context.
This remote context is updated automaticaly only when the user disconnect." %}

Note that this remote synchronization is done for all the Dank u version. Not only on the web-version.

Each student has his/her own contexts. Contexts are never shared beetween two different students.
Each student will have his/her won filters, his/her own tags, his/her own annotations.

{% include note.html content="This is different of what Dyglot does: on Dyglot, all the students share the same filter, tags, annotations" %}


### Roles

Dank u users can take one of three possible roles :

- a student role. See the [student documentation](student_landing_page.html).
- a teacher role. See the [teacher documentation](teacher_landing_page.html).
- a developer role. See the [contributor documentation](contributor_landing_page.html).

#### Student role

With this role, the student enters an existing classroom and practice.
Those classrooms can be either:

- shared classrooms developed by third parties
- or classrooms prepared by a teacher.

He/she can annotate his/her cards, flag them, filter them.
See the [student documentation](student_landing_page.html).

#### Teacher role

With this role, the user creates and maintains his/her classrooms.
To create/maintain a classroom he/she uses several tools provided by Dank u.
See the [teacher documentation](teacher_landing_page.html).

#### Developer role

With this role the user contributes to the Dank u software.
Danku is Free and Open Source Software developed by a community of contributors.
See the [contributor documentation](contributor_landing_page.html).

### Multilingualism

Dank u supports French and English.
Other languages can be added by third parties as Dank u plugins.

Actually the documentaion is only in English.
Other languages can be added by third parties.

### Display form

Very often the cards of a classroom can be displayed with several forms.
A card from the Korean classroom for example, can be displayed:

- as a Korean word
- as an hanja word
- as a Japanese word
- as an english word

We have three posibilities :

- we can multiply by 4 the numbers of cards managed in this classroom. Then we can define filters that select some of them. The great benefit is that one filter can eventually select cards from several of these 4 decks.
- we can decide that there is just one card, shown sometimes with a display form, and some time with another, randomly.
- we can decide that those 4 decks are completely separated and cannot be mixed during a session.

The first option is not very good, because the number of cards will be 4 times more. And we can have sometimes a sequence of two questions on a row, asking one time the question as Korean, and the second time in English.

The second option is not good, because the difficulty for Korean words can be very different than for English words. Some cards will be promoted faster than others just because they have bee asked as Korean words instead of English words

The third option does not allow us to mix different Decks inside a single session.

Actually Dank u choose the third option. This is same as Dyglot.
We call *Decks* each display form.

### Sessions

We have two possibilities :

- We can have a session for every couple (Deck, filter)
- We can have a session for each deck globally managed for all the filters.

The first option means that the same card can be for example in the `New1` stack for a filter and in the `older2` stack for another filter. This is weird.
The second option means that a card can be upgraded faster than another because it belongs also to another filter.

Actually Dank u choose the second option. This is same as Dyglot

### Filters

Filters can be modified without resetting the session. This is better and unlike Dyglot.

### Fields

A card can have several fields. For example a card in the Korean classroom can have :

- A Korean word
- Several English words
- Several examples
- An Hanja field

The teacher defines what are the possible fields that a card can have, and the number of them (one or many).
He defines also which of those fields can have a sound attached.

### Properties

A card can have several Properties. For example Properties for the grammatical form of the word.
Another Properties could be the level of the card.
The teacher must define a table of all the possible Properties for a given kind.

The number of possible properties for a given kind is not limmited. (Unlike Dyglot).
Properties are part of the card. They are read-only during a session

### Attributs

A card can have several kinds of attributs. 
The Student define the possible attributs for each kind inside tables.
The Student can add or remove Attributs on each cards.

The number of possible attributs for a given kind is not limited (unlike Dyglot).
The number of kind of attributs is not limmited (unlike Dyglot).

### Flags

A card can be flagged. Each card can only have one flag. The possible flags are limmited to 512. (Like Dyglot).


### Teacher mode

Every students can switch their role as Teacher. Switching a role is just a way to have different features.
The goal is to completely seperate the two functions so that it is simpler to understand Dank u.
The home screen diplay `Student Joe` for a student or `Teacher Joe` for a teacher.

- A teacher cannot practice, create filters nor flags or annotate some cards.
- A student cannot modify a classroom

Each classroom belongs to a teacher. Remote classrooms always belongs to a remote teacher.
When a remote teacher is killed, all his classrooms are removed and become unavailable to other students.

### Other Apps

#### [Dyglot](https://www.dyglot.com)

Dyglot is an incredible software.
This app is awsome but cannot be compared to Dank u:

- Dyglot is **THE** application to learn Korean.
- Danku is (or will be) **THE** application to handle flascards.

Dyglot and Dank u do not play in the same schoolyard.

#### [Anki](https://en.wikipedia.org/wiki/Anki_(software))

Anki is a very well known App to manage flashcards and that uses the SM2 algorithm.
Anki is Free and Open Source and federate many free contributors.
This App can be directely compared to Dank u.
In fact, Dank u specifications are inspired both by Dyglot and by Anki.

#### [Mnemosyne](https://en.wikipedia.org/wiki/Mnemosyne_(software))

Mnemosyne is another software that is Free and Open Source.
Like Anki, this App implements the SM2 algorithm.

#### [Super Memo](https://en.wikipedia.org/wiki/SuperMemo)

Super Memo is an App publish by Piotr Woźniak in Poland.
Piotr Woźniak did a fantastic job about memory.
He spent most of his life working on memory features, and wrote a thesis about that.
Unfortunately his App is not Free nor Open Source, so that I am not really concerned by it.

### License

Dank u is FOSS (Free and Open Source Software).
Dank u is pusblished under the AGPL license.
This means that if you fork and modify Dank u, you will have to publish your modifications under the AGPL, too.
This means also that if you include all or part of Dank u inside your own software, then all your software must be published under the AGPL license too.

### Troubleshooting

Dank u is developed and maintain by a community of free developers. This community can answer to your question or help you to solve your prolems.
You can :

- create an Issue on Github or Gitlab
- join us on Slack
- join us on Element
- join us on Discord

### Faq

Dank u is not yet born. So there are no FAQs, of course.

{% include links.html %}
