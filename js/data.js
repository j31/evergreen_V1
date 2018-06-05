// Test dictionary
var dictionary = [

  { term: "A bird in the hand is worth two in the bush", termId:1, def: "It is better to be satisfied with something you have than to risk losing it by trying to get something better you may not succeed in getting.", cat: "Saying" },
 
   { term: "Absence makes the heart grow fonder", termId:2, def: "The longer someone is away, the more you realize how much you love or miss them.", cat: "Saying" },
   
   { term: "Actions speak louder than words", termId:3, def: "What someone actually does means more than what they say they will do.", cat: "Saying" },
   
   { term: "Better late than never", termId:4, def: "Even if you are late with a commitment, it's still important to follow through.", cat: "Saying" },
   
   { term: "Do unto others as you would have them do unto you", termId:5, def: "The golden rule.  Treat others as you would like to be treated.", cat: "Saying" },
   
   { term: "Don't put the cart before the horse", termId:6, def: "Don't do things out of the proper order.", cat: "Saying" },
   
   { term: "Live and learn", termId:7, def: "To increase one's knowledge by experience, often by making mistakes.", cat: "Saying" },
   
   { term: "Live and let live", termId:8, def: "To tolerate the opinions and behavior of others, as you lead the life you want.", cat: "Saying" },
   
   { term: "No news is good news", termId:9, def: "Don't worry if you haven't heard; you can assume that all is well.", cat: "Saying" },
   
   { term: "Slow but steady wins the race", termId:10, def: "Consistent and concerted effort leads to success.", cat: "Saying" },
   
   { term: "Two wrongs don't make a right", termId:11, def: "Responding to a misdeed in kind is not appropriate.", cat: "Saying" },
   
   { term: "When in Rome, do as the Romans do", termId:12, def: "In an unfamiliar country or situation, you should follow the lead of the local or experienced people.", cat: "Saying" },
   
   { term: "Where there's smoke there's fire", termId:13, def: "Rumors or rumbles tend to indicate much larger problems.", cat: "Saying" },
   
   { term: "A penny saved is a penny earned", termId:14, def: "Spend money wisely.", cat: "Saying" },
   
   { term: "All's well that ends well", termId:15, def: "Problems that occur along the way don't matter as long as the outcome is positive.", cat: "Saying" },
   
   { term: "Birds of feather flock together", termId:16, def: "People tend to work, live and spend time with others who are similar.", cat: "Saying" },
   
   { term: "Don't count your chickens before they hatch", termId:17, def: "Don't rely on something good happening until it has actually happened.", cat: "Saying" },
   
   { term: "Let's cross that bridge when we come to it", termId:18, def: "Don't worry about potential problems, rather face problems as they come.", cat: "Saying" },
   
   { term: "Out of sight, out of mind	", termId:19, def: "You soon forget people or things that are no longer visible or present.", cat: "Saying" },
   
   { term: "Rome wasn't built in a day", termId:20, def: "Important work takes time.", cat: "Saying" },
   
   { term: "The early bird catches the worm", termId:21, def: "The person who is first has the advantage.", cat: "Saying" },
   
   { term: "The grass is always greener on the other side of the fence", termId:22, def: "Other people's situations always seem better than your own.", cat: "Saying" },
   
   { term: "When it rain, it pours", termId:23, def: "Problems or bad outcomes tend to occur in clusters.", cat: "Saying" },
   
   { term: "Where there's a will, there's a way", termId:24, def: "If someone is really committed to something, there's a way to make it happen.", cat: "Saying" },
   
   { term: "You can't have your cake and eat it too", termId:25, def: "You can't have it both ways.", cat: "Saying" },
   
   { term: "A man is known by the company he keeps", termId:26, def: "Our character is reflected in our choice of friends.", cat: "Saying" },
   
   { term: "A watched pot never boils	", termId:27, def: "When we wait impatiently, it seems to take longer.	", cat: "Saying" },
   
   { term: "All's fair in love and war", termId:28, def: "In highly charged situations, any method of achieving your objective is justifiable.", cat: "Saying" },
   
   { term: "An apple a day keeps the doctor away", termId:29, def: "Eating nutritious food, and other simple preventions, helps keep you healthy.", cat: "Saying" },
   
   { term: "Don't judge a book by its cover", termId:30, def: "You shouldn't prejudge people or things by their outward appearance.	", cat: "Saying" },
     
   { term: "Early to bed and early to rise makes a man healthy, wealthy, and wise", termId:31, def: "Benjamin Franklin's advice for success.", cat: "Saying" },
   
   { term: "Haste makes waste", termId:32, def: "Don't rush through a task as you will make mistakes that take more time and resources.", cat: "Saying" },
   
   { term: "If at first you don't succeed, try, try again", termId:33, def: "Be persistent, even if you face early setbacks.", cat: "Saying" },
   
   { term: "If the shoe fits, wear it", termId:34, def: "If it applies to you, accept it.", cat: "Saying" },
   
   { term: "If you can't stand the heat, get out of the kitchen", termId:35, def: "If you cannot handle the pressure, you should not remain in a position where you have to deal with it.", cat: "Saying" },
   
   { term: "Imitation is the sincerest form of flattery	", termId:36, def: "To imitate someone is to pay the person a genuine, often unintended, compliment.", cat: "Saying" },
   
   { term: "It's never over till it's over", termId:37, def: "Even if it's going well, there's no guarantee of success until it's final.", cat: "Saying" },
   
   { term: "Lightning never strikes twice in the same place", termId:38, def: "Rare situations or events are unlikely to happen again in exactly the same circumstances or to the same person.", cat: "Saying" },
   
   { term: "Look before you leap", termId:39, def: "Before you act, consider the possible consequences or dangers.", cat: "Saying" },
   
   { term: "One rotten apple spoils the barrel", termId:40, def: "A negative or bad person influences everyone he or she comes into contact with.", cat: "Saying" },
   
   { term: "Seeing is believing", termId:41, def: "Even when hard to believe, when you see it for yourself, you are convinced.", cat: "Saying" },
   
   { term: "The bad workman always blames his tools", termId:42, def: "Blaming external factors, rather than take responsibility for their own poor work.", cat: "Saying" },
   
   { term: "The pen is mightier than the sword", termId:43, def: "Communicating is more effective than fighting.", cat: "Saying" },
   
   { term: "The show must go on", termId:44, def: "Despite mishaps, you should continue on as planned.", cat: "Saying" },
   
   { term: "There are plenty of fish in the sea", termId:45, def: "There are plenty of good alternatives.", cat: "Saying" },
   
   { term: "Too many cooks spoil the broth", termId:46, def: "	If too many people are doing or managing an activity, it will not turn out well.", cat: "Saying" },
   
   { term: "Two heads are better than one", termId:47, def: "It's helpful to have the advice or opinion of a another person.", cat: "Saying" },
   
   { term: "What's good for the goose is good for the gander", termId:48, def: "If one person is allowed to do something, then everyone should be allowed.", cat: "Saying" },
   
   { term: "When the going gets tough, the tough get going", termId:49, def: "In difficult situations, the strong rise to the occasion.", cat: "Saying" },
   
   { term: "You can unscramble an egg", termId:50, def: "Some situations are irreversible.", cat: "Saying" },
   
   { term: "You can't teach an old dog news tricks", termId:51, def: "People who have long been used to doing things in a particular way will not modify their habits.", cat: "Saying" },
   
   { term: "His bark is worse than his bite", termId:52, def: "Someone may sound frightening, but they are actually harmless.", cat: "Saying" },
   
   { term: "A fool and his money are soon parted", termId:53, def: "It's easy to waste money and it is foolish to do so.", cat: "Saying" }
 ];
 
 
 // Seed data for user knowlege
 var knowledge = [
   { termId: 1,   strength: 0 },
   { termId: 2,   strength: 0 },
   { termId: 3,   strength: 1 },
   { termId: 4,   strength: 2 },
   { termId: 5,   strength: 1 },
   { termId: 6,   strength: 0 },
   { termId: 7,   strength: 0 },
   { termId: 8,   strength: 0 },
   { termId: 9,   strength: 0 },
   { termId: 10,   strength: 0 },
  //  { termId: 11,   strength: 0 },
  //  { termId: 12,   strength: 0 },
  //  { termId: 13,   strength: 0 },
  //  { termId: 14,   strength: 0 },
  //  { termId: 15,   strength: 0 },
  //  { termId: 16,   strength: 0 },
  //  { termId: 17,   strength: 0 },
  //  { termId: 18,   strength: 0 },
  //  { termId: 19,   strength: 0 },
  //  { termId: 20,   strength: 0 },
  //  { termId: 21,   strength: 0 },
  //  { termId: 22,   strength: 0 },
  //  { termId: 23,   strength: 0 },
  //  { termId: 24,   strength: 0 },
  //  { termId: 25,   strength: 0 },
  //  { termId: 26,   strength: 0 },
  //  { termId: 27,   strength: 0 },
  //  { termId: 28,   strength: 0 },
  //  { termId: 29,   strength: 0 },
  //  { termId: 30,   strength: 0 },
  //  { termId: 31,   strength: 0 },
  //  { termId: 32,   strength: 0 },
  //  { termId: 33,   strength: 0 },
  //  { termId: 34,   strength: 0 },
  //  { termId: 35,   strength: 0 },
  //  { termId: 36,   strength: 0 },
  //  { termId: 37,   strength: 0 },
  //  { termId: 38,   strength: 0 },
  //  { termId: 39,   strength: 0 },
  //  { termId: 40,   strength: 0 },
  //  { termId: 41,   strength: 0 },
  //  { termId: 42,   strength: 0 },
  //  { termId: 43,   strength: 0 },
  //  { termId: 44,   strength: 0 },
  //  { termId: 45,   strength: 0 },
  //  { termId: 46,   strength: 0 },
  //  { termId: 47,   strength: 0 },
  //  { termId: 48,   strength: 0 },
  //  { termId: 49,   strength: 0 },
  //  { termId: 50,   strength: 0 },
  //  { termId: 51,   strength: 0 },
  //  { termId: 52,   strength: 0 },
  //  { termId: 53,   strength: 0 }
 ];  