/* tslint:disable:max-line-length */
import { Injectable } from '@angular/core';
import {SharedService} from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  CorrectAnswers = 0;
  SkippedAnswers = 0;
  InCorrectAnswers = 0;
  QuestionIndex = 0;
  private Questions = [
    {
      question: 'What is the missing attribute in the following statement of Usability "Extent to which a system, product or service can be used by specified users to achieve specified goals with effectiveness, ________________ and satisfaction in a specified context of use',
      options: [
        {label: `Agility`, correct: false, failureMessage: ''},
        {label: 'Efficiency', correct: true, successMessage: ''},
        {label: 'Economically', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Efficiency defines the resources - time, money, intellectual, effort, human resources, needed to achieve a certain goal. This attribute helps users to justify their Return on Investment, which is an important part in decision making.',
    },

    {
      question: 'A global online fashion brand has different websites for different countries. For each website, the image and language are localized to that country. This is an example of:',
      options: [
        {label: 'Usability keeping in mind the specified users', correct: false, failureMessage: ''},
        {label: 'Usability keeping in mind the specified context of use', correct: false, successMessage: ''},
        {label: 'Usability to increase satisfaction', correct: false, successMessage: ''},
        {label: 'None of these', correct: false, successMessage: ''},
        {label: 'All of these', correct: true, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: `Excellent! Usability is to keep in mind user's behaviour, their environment so that they can achieve their goals with efficiency, effectiveness and satisfaction.`,
    },
    {
      question: `Usability Audit is superior to Usability Testing because it is quick and less resource intensive`,
      options: [
        {label: 'True', correct: false, failureMessage: ''},
        {label: 'False', correct: true, successMessage: ''},
      ],
      // failureMessage: '',
      successMessage: 'Usability Audit and Usability Testing are both equally important and relevant for product teams trying to create usable products.',
    },
    {
      question: `Which heuristic is shown in following figure? <br>
	<img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q4.jpg">
	`,
      options: [
        {label: 'Error prevention', correct: true, failureMessage: ''},
        {label: 'Visibility of system status', correct: false, successMessage: ''},
        {label: 'Consistency and Standards', correct: false, successMessage: ''},
        {label: 'Match between system and real world', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'The keyboard has auto correct feature that helps users to type with better accuracy.',
    },
    {
      question: `Which of the following tasks performed below is an example of User control and freedom? <br>
	<img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q5.jpg">`,
      options: [
        {label: 'Uploading files', correct: false, failureMessage: ''},
        {label: 'Cancel upload icon', correct: true, successMessage: ''},
        {label: 'Name and Size of files shown upfront', correct: false, successMessage: ''},
        {label: 'Familiar icon for "ATTACH FILE"', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: '"User control and freedom" says, users often choose system functions by mistake and will need a clearly marked "Cancel" to leave the unwanted state, as quickly as possible.',
    },
    {
      question: `Which of the following image is better as per visibility of system status? <br>
	<img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q6-1.jpg" </br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q6-2.jpg">`,
      options: [
        {label: 'Image 1', correct: false, failureMessage: ''},
        {label: 'Image 2', correct: true, successMessage: ''},
        {label: 'None of them', correct: false, successMessage: ''},
        {label: 'Both of them', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'IMAGE 2 is showing used / available space in a drive, which isn\'t there in IMAGE 1.',
    },
    {
      question: `The pattern which is highlighted in the image below is known as __________________, and comes under ___________________ heuristics. <br>
	<img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q7.jpg">`,
      options: [
        {label: 'Breadcrumb, Visibility of system status', correct: true, failureMessage: ''},
        {label: 'Wizard, Consistency and standards', correct: false, successMessage: ''},
        {label: 'Breadcrumb, Consistency and standards', correct: false, successMessage: ''},
        {label: 'Wizard, Visibility of system status', correct: false, successMessage: ''}

      ],
      // failureMessage: '',
      successMessage: 'Showing levels of navigation linearly is termed as "breadcrumb". This helps user know where they are, hence it comes under VISIBILITY OF SYSTEM STATUS.',
    },
    {
      question: `Which of the following sentences is better when it comes to the match between system and real world. <br> SENTENCE 1: You will love the food and ambience. <br> SENTENCE 2: The food and ambience will be loved by you`,
      options: [
        {label: 'statement 1', correct: true, failureMessage: ''},
        {label: 'statement 2', correct: false, successMessage: ''},
        {label: 'both statements are similar', correct: false, successMessage: ''},
        {label: 'none of them is a good sentence', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Compose sentences in active rather than passive voice. Users benefit from simple, direct language. Sentences in active voice are typically more concise than sentences in passive voice. Strong verbs help the user know who is acting and what is being acted upon.',
    },
    {
      question: `A food delivery mobile app giving its users an option to track delivery. This is an example of _________________. <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q9.jpg">`,
      options: [
        {label: 'Visibility of system status', correct: true, failureMessage: ''},
        {label: 'Match between system and real world', correct: false, successMessage: ''},
        {label: 'Consistency and Standards', correct: false, successMessage: ''},
        {label: 'User control and freedom', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: `Tracking an order is a helpful interaction between users and system. In given Image, it has a wonderful way of handling this with an interactive map that shows current location of the order, so that user can know what's going on. That's why it comes under Visibility of system status`,
    },
    {
      question: `Following image corresponds to 2 different pages of same website. What's the issue here, and which heuristic is this? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q10-1.jpg"> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q10-2.jpg">`,
      options: [
        {label: 'Inconsistent labels over buttons with same meaning on different pages, Consistency and Standards', correct: true, failureMessage: ''},
        {label: 'Inconsistent labels over buttons with same meaning on different pages, User Control and Freedom', correct: false, successMessage: ''},
        {label: 'Colour of action buttons (SAVE and ABORT) used should be same, Visibility of system status', correct: false, successMessage: ''},
        {label: 'Colour of action buttons (SAVE and ABORT) used should be same, Match between system and real world', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Inconsistent labels over buttons with same meaning on different pages',
    },
    {
      question: `Which of the following image(s) is/are good with Error prevention? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q11-1.jpg"> <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q11-2.jpg">`,
      options: [
        {label: 'IMAGE 1', correct: true, failureMessage: ''},
        {label: 'IMAGE 2', correct: false, successMessage: ''},
        {label: 'Both are equally good', correct: false, successMessage: ''},
        {label: 'None of them are good', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'When you choose a password, tips are provided to prevent errors and password strength is calculated and displayed as you type.',
    },
    {
      question: ` Most of the websites display the sign in/login option on the right top of a website. This is an example of ______________  <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q12-1.jpg"> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q12-2.jpg">`,
      options: [
        {label: 'Consistency and Standards', correct: true, failureMessage: ''},
        {label: 'Visibility of system status', correct: false, successMessage: ''},
        {label: 'Match between system and real world', correct: false, successMessage: ''},
        {label: 'Error prevention', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'You will always find sign-in, profile details and shopping cart information at the top right corner.',
    },
    {
      question: `Evite changed their homepage design from IMAGE 1 to IMAGE 2. What do you think could have been a reason for the change? Also mention, which heuristic is being represented? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q13-1.jpg"> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q13-2.jpg">`,
      options: [
        {label: 'Too much data on single page, Aesthetic and minimalist design', correct: true, failureMessage: ''},
        {label: 'Using too many colours distracting users, help users recognize, diagnose, and recover from errors', correct: false, successMessage: ''},
        {label: 'The content was tough to understand, Recognition rather than recall', correct: false, successMessage: ''},
        {label: 'No navigation is shown in previous website, Flexibility and efficiency of use', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Remove or hide irrelevant or rarely needed information – They compete with important information on screen',
    },
    {
      question: `Following is a good example of which heuristics? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q14.jpg">`,
      options: [
        {label: 'Help users recognize, diagnose and recover from errors', correct: true, failureMessage: ''},
        {label: 'Flexibility and efficiency of use', correct: false, successMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''},
        {label: 'Help and documentation', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: `Cute 404 pages are kind of a “thing” now, here’s one from iStockphoto. They show a non-intimidating image (from one of their own artists, of course) and speak in language that humanises the site and doesn’t imply the problem was user's fault. Then they also suggest some links that might help them out.`,
    },
    {
      question: `Google search is an example of? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q15.jpg">`,
      options: [
        {label: 'Flexibility and efficiency of use', correct: true, failureMessage: ''},
        {label: 'Help users recognize, diagnose, and recover from errors', correct: false, successMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''},
        {label: 'Help and documentation', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: ' When you google it gives you list suggestions as you type in based on your previous searches and related most searches. It also lists your matching bookmarks as well.',
    },
    {
      question: `Keyboard shortcuts like these are examples of ______________________ <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q16.jpg">`,
      options: [
        {label: 'Flexibility and efficiency of use', correct: true, failureMessage: ''},
        {label: 'Recognition rather than recall', correct: false, successMessage: ''},
        {label: 'Help users recognize, diagnose, and recover from errors', correct: false, successMessage: ''},
        {label: 'Help and documentation', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: ' Keyboard shortcuts helps the advanced users to complete their tasks in a lesser time',
    },
    {
      question: `Which of the following is not an example of error prevention? `,
      options: [
        {label: 'The numeric keypad for the number only inputs like when entering a date', correct: false, failureMessage: ''},
        {label: 'Please enter a valid email ID error message', correct: true, successMessage: ''},
        {label: `" Are you sure you want to refresh the page? Changes may not have been saved to your post".`, correct: false, successMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Telling users what might be an error and how to rectify is an example of Help users recognize, diagnose, and recover from errors.',
    },
    {
      question: `A Usability expert would say that the warning message on right is better than the one on the left. Which heuristic is he implying to? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q17-after.jpg">`,
      options: [
        {label: 'Help users recognize, diagnose and recover from errors', correct: true, failureMessage: ''},
        {label: 'Recognition rather than recall', correct: false, successMessage: ''},
        {label: 'Help and documentation', correct: false, successMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Telling users what might be an error and how to rectify is an example of Help users recognize, diagnose, and recover from errors.',
    },
    {
      question: `This is an ecommerce website's product page. Which heuristic they are good at which is shown below (GIF) <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q18.jpg">`,
      options: [
        {label: 'Help and documentation', correct: true, failureMessage: ''},
        {label: 'Flexibility and efficiency of use', correct: false, successMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''},
        {label: 'Help users recognize, diagnose and recover from errors', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'You can provide any extra information that would be useful to users, along with the label (question mark in this case). This is a nice way of documenting extra help for users',
    },
    {
      question: `The critical paths that capture 90% of users' action on the website are called`,
      options: [
        {label: 'Red Routes', correct: true, failureMessage: ''},
        {label: 'Test Routes', correct: false, successMessage: ''},
        {label: 'Test Path', correct: false, successMessage: ''},
        {label: 'None of these', correct: false, successMessage: ''},
        {label: 'Bottom of Form', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: '',
    },
    {
      question: `What is an ideal number of evaluators for conducting Heuristic Evaluation`,
      options: [
        {label: '2', correct: false, failureMessage: ''},
        {label: '3-5', correct: true, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Conducting heuristic evaluation with just 2 evaluators can lead to biased reporting. You cannot identify any patterns in observation based only on 2 evaluators',
    },
    {
      question: ` Heuristic Evaluation should take place only once the product is launched. `,
      options: [
        {label: 'False! Heuristic Evaluation could be a part of the evaluation even at the prototype stage. ', correct: true, failureMessage: ''},
        {label: 'True! Heuristic Evaluation should be done on a ready product', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: '',
    },
    {
      question: `Which do you think is a better design and which heuristics it represents? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q22.jpg"> `,
      options: [
        {label: 'VISUAL DISTINCTIONS, Consistency and standards', correct: false, failureMessage: ''},
        {label: 'EQUAL VISUAL WEIGHT, Error prevention', correct: false, successMessage: ''},
        {label: 'VISUAL DISTINCTIONS, Error prevention', correct: true, successMessage: ''},
        {label: 'EQUAL VISUAL WEIGHT, Consistency and standards', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Visual weight. To make clear distinction between two options, you have to use different visual weight for buttons. The button with the strongest visual weight will get more attention.',
    },
    {
      question: `Which good practice is being shown below and which heuristic it represents? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q23.jpg">`,
      options: [
        {label: 'edit / remove option, Error prevention', correct: false, failureMessage: ''},
        {label: 'edit / remove option, Consistency and standards', correct: false, successMessage: ''},
        {label: 'edit / remove option, Visibility of system status', correct: false, successMessage: ''},
        {label: 'edit / remove option, User control and freedom', correct: true, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Allow users to change or remove items from cart gives user the freedom while they are taking the final action of making purchase',
    },
    {
      question: ` This website (attached image) is doing great in _______________________ heuristic guideline. <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q24.jpg">`,
      options: [
        {label: 'Match between system and real world', correct: false, failureMessage: ''},
        {label: 'User control and freedom', correct: false, successMessage: ''},
        {label: 'Error prevention', correct: true, successMessage: ''},
        {label: 'Visibility of system status', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'instructions given for password helps user getting saved from making mistakes',
    },
    {
      question: `Which heuristic is being shown in the following journey? <br>
					Home page > Navigate to any other page > Click on LOGO > Home page again`,
      options: [
        {label: 'Visibility of system status', correct: false, failureMessage: ''},
        {label: 'Error prevention', correct: false, successMessage: ''},
        {label: 'Match between system and real world', correct: false, successMessage: ''},
        {label: 'User control and freedom', correct: true, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Returning to Homepage is the most common instinct of users when they feel lost. It gives them an option to start afresh. Make sure that your logo is always a URL to go back home.',
    },
    {
      question: `Which heuristic is being shown here in google search? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q26.jpg">`,
      options: [
        {label: 'Consistency and standards', correct: false, failureMessage: ''},
        {label: 'Error prevention', correct: true, successMessage: ''},
        {label: 'Visibility of system status', correct: false, successMessage: ''},
        {label: 'Match between system and real world', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Suggestion given by google when user enters a wrong keyword is an example of error prevention.',
    },
    {
      question: `Which image is a better way of showing texts on images? <br>IMAGE 1 <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q27-1.jpg"> <br> IMAGE 2 <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q27-2.jpg">`,
      options: [
        {label: 'IMAGE 2', correct: true, failureMessage: ''},
        {label: 'Both are equally good', correct: false, successMessage: ''},
        {label: 'None of them are good', correct: false, successMessage: ''},
        {label: 'IMAGE 1', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'When users are expected to rapidly read and understand prose text, use black text on a plain, high-contrast, non-patterned background.',
    },
    {
      question: `Which of the following is better in terms of heuristics? <br> IMAGE 1 <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q28-1.jpg"> <br> IMAGE 2 <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q28-2.jpg"> `,
      options: [
        {label: 'IMAGE 2', correct: true, failureMessage: ''},
        {label: 'None of them is good', correct: false, successMessage: ''},
        {label: 'Both are equally good', correct: false, successMessage: ''},
        {label: 'IMAGE 1', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'The dismissive action text ‘No’ answers the question, but does not suggest what will happen afterwards. A better action pair would be an explicit ‘Cancel’ and ‘Discard.’ The affirmative action text ‘Discard’ clearly indicates the outcome of the decision.',
    },
    {
      question: `Following screenshot is an example of _________________ <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q29.jpg">`,
      options: [
        {label: 'Help user recognize, diagnose and recover from error', correct: false, failureMessage: ''},
        {label: 'Help and documentation', correct: false, successMessage: ''},
        {label: 'Recognize rather than recall', correct: true, successMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Options for available tastes by FOURSQUARE helps user to enter without even recalling them.',
    },		{
      question: `The three windows shown below are from 3 tools from Microsoft. What's the best thing about each Microsoft tool shown below? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q30.jpg">`,
      options: [
        {label: 'Consistency in every tool', correct: true, failureMessage: ''},
        {label: 'Helping users through documents prior to use', correct: false, successMessage: ''},
        {label: 'Colour combination', correct: false, successMessage: ''},
        {label: 'Icons are very easy to understand by users', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Microsoft Word, Excel, and PowerPoint all use the same style toolbar with the same primary menu options: Home, Insert, Page Layout… Consistency results in efficiency and perceived intuitiveness.',
    },
    {
      question: `This is an example of a tool, where the user can switch between different layers. This is a good example of Visibility of System Status and Flexibility and Efficiency of Use. <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q31.jpg">`,
      options: [
        {label: 'False it represents the Efficiency of Use and not Visibility of System Status', correct: false, failureMessage: ''},
        {label: 'True, it represents both these Heuristic', correct: true, successMessage: ''},
        {label: 'False, it represents the Visibility of System Status and not Efficiency of Use', correct: false, successMessage: ''},
      ],
      // failureMessage: '',
      successMessage: 'On tools like Adobe XD, Photoshop one can go to any element of their design whenever they want. This increases flexibility. At the same time, the users can know which layer they are on, as it is highlighted by the use of color.',
    },
    {
      question: `The Loading Gmail Animation is an example of what kind of progress indicator and represents what heuristic? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q32.jpg">`,
      options: [
        {label: 'Determinate, Visibility of System Status', correct: false, failureMessage: ''},
        {label: 'Indeterminate, Visibility of System Status', correct: true, successMessage: ''},
        {label: 'Determinate, Aesthetics and Minimalist Design', correct: false, successMessage: ''},
      ],
      // failureMessage: '',
      successMessage: 'Indeterminate progress indicators tells users that the process is taking place without putting a fixed number to it. Gmail uses it to give visibility of system status to its users through an animation as shown in the image.',
    },
    // {
    // 	question: `What are your views about the following menu from a website. Is it good/bad, and why? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q33.jpg">`,
    // 	options: [
    // 		{label: 'BAD, should have shown previews of each font', correct: true, failureMessage: ''},
    // 		{label: 'GOOD, Highlight the selected navigation', correct: true, successMessage: ''},
    // 		{label: 'Nothing good about this', correct: false, successMessage: ''},
    // 		{label: 'Nothing bad about this', correct: false, successMessage: ''}
    // 	],
    // 	// failureMessage: '',
    // 	successMessage: 'Preview the fonts instead of just the font name.',
    // 	multi: true,
    // 	shouldChooseAllCorrect: true
    // },
    {
      question: `The iconography in the app screenshot below represents which heuristic? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q34.jpg">`,
      options: [
        {label: 'Aesthetic and minimalist design', correct: false, failureMessage: ''},
        {label: 'Flexibility and efficiency of use', correct: false, successMessage: ''},
        {label: 'Recognition rather than recall', correct: true, successMessage: ''},
        {label: 'Help users recognize, diagnose, and recover from errors', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Category icon helps user (both experienced and inexperienced) minimize their memory load.',
    },
    {
      question: `The image below represents the violation of one of the Nielsen's Heuristics. Which one is it? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q35-1.jpg"> <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q35-2.jpg">`,
      options: [
        {label: 'Visibility of system status', correct: false, failureMessage: ''},
        {label: 'User control and freedom', correct: false, successMessage: ''},
        {label: 'Consistency and Standards', correct: true, successMessage: ''},
      ],
      // failureMessage: '',
      successMessage: 'The same category names should be used throughout to maintain consistency.',
    },
    {
      question: `Which heuristic is being shown below? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q36-1.jpg"> <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q36-2.jpg">`,
      options: [
        {label: 'Visibility of system status', correct: false, failureMessage: ''},
        {label: 'Match between system and real world', correct: false, successMessage: ''},
        {label: 'Consistency and standards', correct: false, successMessage: ''},
        {label: 'User control and freedom', correct: true, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Undo option on Gmail can help users undo the move to trash action, in case it happened by mistake.',
    },
    {
      question: `Which of the following images shown below is better and in which heuristic they are better in? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q37-1.jpg"> <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q37-2.jpg">`,
      options: [
        {label: 'IMAGE 1, Match between system and the real world', correct: false, failureMessage: ''},
        {label: 'IMAGE 2, Match between system and the real world', correct: true, successMessage: ''},
        {label: 'IMAGE 1, Error prevention', correct: false, successMessage: ''},
        {label: 'IMAGE 2, Error prevention', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Familiar Icons: Recycle bin icon is similar to a real bin, and the icon itself shows whether it has files in it or not.',
    },
    {
      question: `Following is the live chat from homepage of a website. This is an example of __________________. <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q38.jpg">`,
      options: [
        {label: 'Help and documentation', correct: true, failureMessage: ''},
        {label: 'Aesthetic and minimalist design', correct: false, successMessage: ''},
        {label: 'Help users recognize, diagnose, and recover from errors', correct: false, successMessage: ''},
        {label: 'Flexibility and efficiency of use', correct: false, successMessage: ''}
      ],
      // failureMessage: '',
      successMessage: 'Chat feature on websites (especially e-commerce) helps user to clarify their doubts and making further experience convenient.',
    },
    // {
    // 	question: `Which heuristics is being shown here? <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q39-1.jpg"> <br> <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q39-2.jpg">`,
    // 	options: [
    // 		{label: 'visibility of system status', correct: false, failureMessage: ''},
    // 		{label: 'User control and freedom', correct: true, successMessage: ''},
    // 		{label: 'Consistency and standards', correct: false, successMessage: ''},
    // 		{label: 'Match between system and real world', correct: false, successMessage: ''}
    // 	],
    // 	// failureMessage: '',
    // 	successMessage: 'Overlapping windows reduces user experience. User should have the freedom to explore every window (boxes).',
    // },
    // {
    // question: `The pattern which is highlighted in the image below is known as __________________, and comes under ___________________ heuristics. <br/>
    // <img src="https://uxgorilla.com/quiz/heuristic-evaluation/images/Q6-1.jpg" PATTERN:  <br>  Home > Mobile & Accessories > Mobiles > Samsung Mobile > Samsung Galaxy`,
    // options: [
    // 	{label: '', correct: false, failureMessage: ''},
    // 	{label: '', correct: false, successMessage: ''},
    // 	{label: '', correct: false, successMessage: ''}
    // ],
    // // failureMessage: '',
    // successMessage: '',
    // },
    // {
    // 	question: 'This is question 2, a multiple answer question',
    // 	options: [
    // 		{label: 'Option 1', correct: false, failureMessage: ''},
    // 		{label: 'Option 2', correct: true, successMessage: ''},
    // 		{label: 'Option 3', correct: true, successMessage: ''}
    // 	],
    // 	multi: true,
    // 	// failureMessage: '',
    // 	successMessage: '',
    // 	shouldChooseAllCorrect: true
    // }
  ];

  get_Qind() {
    return this.QuestionIndex;
  }

  get_Questions() {
    return this.Questions;
  }

  constructor() { }
}
