// const swampQuestions = [

//     {
//         enemy: "",
//         quote: "food desert vs food apartheid",
//         text: "What does the term 'food desert' most significantly obscure?",
//         choices: [
//             "It focuses too heavily on physical geography over urban planning details",
//             "It implies rural areas are more affected than urban areas",
//             "It can suggest the absence is natural rather than systemically produced",
//             "It overemphasizes food availability instead of nutrition quality"
//         ],
//         correct: 2,
//         explanation: "It naturalizes inequality instead of linking it to systems."
//     },

//     {
//         enemy: "",
//         quote: "food desert vs food apartheid",
//         text: "Why is 'food apartheid' considered a more structural term?",
//         choices: [
//             "It focuses primarily on economic pricing differences",
//             "It explicitly highlights deliberate systems shaping unequal access",
//             "It eliminates geographic reference entirely",
//             "It is more commonly used in scientific literature"
//         ],
//         correct: 1,
//         explanation: "It centers intentional systemic inequality."
//     },

//     {
//         enemy: "",
//         quote: "master bedroom vs primary bedroom",
//         text: "What is the strongest critique of 'master bedroom' terminology?",
//         choices: [
//             "It may imply ownership and hierarchy embedded in housing language",
//             "It creates ambiguity in architectural blueprints",
//             "It is less commonly used in modern real estate listings",
//             "It confuses buyers about room size standards"
//         ],
//         correct: 0,
//         explanation: "'Master' carries hierarchical connotations."
//     },

//     {
//         enemy: "",
//         quote: "master bedroom vs primary bedroom",
//         text: "Why is 'primary bedroom' preferred in revised terminology?",
//         choices: [
//             "It standardizes architectural labeling across regions",
//             "It removes dominance-based language associations",
//             "It increases clarity about room function",
//             "It shortens property descriptions for listings"
//         ],
//         correct: 1,
//         explanation: "It reduces hierarchical framing."
//     },

//     {
//         enemy: "",
//         quote: "suspect vs criminal",
//         text: "What is the most precise distinction between 'suspect' and 'criminal'?",
//         choices: [
//             "Suspect refers to minor offenses, criminal to major ones",
//             "Suspect indicates alleged involvement, criminal implies confirmed guilt",
//             "Suspect is informal, criminal is formal reporting language",
//             "Suspect is used only in civil cases, criminal in legal cases"
//         ],
//         correct: 1,
//         explanation: "Only 'criminal' implies conviction."
//     },

//     {
//         enemy: "",
//         quote: "suspect vs criminal",
//         text: "What is the strongest risk in early use of the word 'criminal' in reporting?",
//         choices: [
//             "It limits reporting accuracy across agencies",
//             "It creates unnecessary technical detail",
//             "It may influence perception before legal confirmation is established",
//             "It reduces emotional tone in journalism"
//         ],
//         correct: 2,
//         explanation: "It can imply guilt prematurely."
//     },

//     {
//         enemy: "",
//         quote: "neurotypical vs neurodivergent vs normal",
//         text: "What is the strongest issue with the word 'normal' in this context?",
//         choices: [
//             "It excludes only extreme neurological cases",
//             "It implies a single dominant cognitive standard as the baseline",
//             "It is too informal for academic writing",
//             "It is medically outdated terminology in clinical diagnosis"
//         ],
//         correct: 1,
//         explanation: "'Normal' establishes a normative hierarchy."
//     },

//     {
//         enemy: "",
//         quote: "neurodivergent vs neurotypical",
//         text: "What is the strongest purpose of the term 'neurodivergent'?",
//         choices: [
//             "It categorizes cognitive differences without ranking them as deficits",
//             "It replaces medical diagnosis systems entirely",
//             "It defines neurological conditions more narrowly than older terms",
//             "It separates clinical from educational terminology"
//         ],
//         correct: 0,
//         explanation: "It avoids value judgment."
//     },

//     {
//         enemy: "",
//         quote: "terrorists vs insurrectionists vs rebels",
//         text: "Why are these terms often contested in media?",
//         choices: [
//             "They describe different levels of organization size only",
//             "They differ primarily in legal jurisdiction usage",
//             "They reflect different judgments about legitimacy and political framing",
//             "They are interchangeable but vary by country"
//         ],
//         correct: 2,
//         explanation: "Each term shows political perspective."
//     },

//     {
//         enemy: "",
//         quote: "terrorists vs insurrectionists",
//         text: "What is the strongest effect of labeling a group 'insurrectionists' instead of 'terrorists'?",
//         choices: [
//             "It neutralizes emotional tone in reporting",
//             "It removes legal accountability entirely",
//             "It shifts focus toward political rebellion rather than indiscriminate violence",
//             "It increases geographic specificity of events"
//         ],
//         correct: 2,
//         explanation: "It reframes perceived legitimacy."
//     },

//     {
//         enemy: "",
//         quote: "illegal alien vs undocumented immigrant",
//         text: "What is the strongest critique of the term 'illegal alien'?",
//         choices: [
//             "It is less precise than immigration law terminology",
//             "It is no longer used in any official context",
//             "It refers only to criminal cases in court reporting",
//             "It combines legal status with dehumanizing language"
//         ],
//         correct: 3,
//         explanation: "It merges identity with illegality and othering."
//     },

//     {
//         enemy: "",
//         quote: "illegal alien vs undocumented immigrant",
//         text: "What is the primary function of shifting to 'undocumented immigrant'?",
//         choices: [
//             "It simplifies legal classification systems",
//             "It reduces emotional impact in public discourse",
//             "It emphasizes migration patterns over status",
//             "It separates legal documentation status from personal identity"
//         ],
//         correct: 3,
//         explanation: "It avoids dehumanization."
//     },

//     {
//         enemy: "",
//         quote: "victim vs survivor",
//         text: "What is the strongest conceptual difference between 'victim' and 'survivor'?",
//         choices: [
//             "Victim emphasizes harm endured, survivor emphasizes continuation and agency",
//             "Survivor removes acknowledgment of harm entirely",
//             "Victim is legal terminology, survivor is social terminology",
//             "Victim refers only to past events, survivor to ongoing situations"
//         ],
//         correct: 0,
//         explanation: "It shifts focus from harm to resilience."
//     },

//     {
//         enemy: "",
//         quote: "victim vs survivor",
//         text: "Why might 'survivor' be preferred in advocacy contexts?",
//         choices: [
//             "It reduces emotional sensitivity in reporting",
//             "It reframes individuals through resilience rather than harm identity",
//             "It avoids referencing the original event entirely",
//             "It is more legally accurate than victim"
//         ],
//         correct: 1,
//         explanation: "It emphasizes empowerment framing."
//     },

//     {
//         enemy: "",
//         quote: "climate change vs climate crisis",
//         text: "What is the strongest difference in implication between these terms?",
//         choices: [
//             "Climate crisis emphasizes urgency and severity more explicitly",
//             "Climate crisis removes scientific data from discussion",
//             "They are identical in journalistic usage",
//             "Climate change is used only in scientific contexts"
//         ],
//         correct: 0,
//         explanation: "Crisis implies immediate danger."
//     },

//     {
//         enemy: "",
//         quote: "riot vs uprising",
//         text: "What is the strongest framing difference between 'riot' and 'uprising'?",
//         choices: [
//             "Riot emphasizes chaos and criminality, uprising emphasizes political motivation",
//             "They are identical terms used in different regions",
//             "Uprising always implies violence while riot does not",
//             "Riot is always legally accurate while uprising is not"
//         ],
//         correct: 0,
//         explanation: "Framing shapes perceived legitimacy."
//     },

//     {
//         enemy: "",
//         quote: "pro-life vs anti-abortion",
//         text: "What is the strongest critique of the term 'pro-life'?",
//         choices: [
//             "It is used only in religious contexts",
//             "It is scientifically inaccurate",
//             "It removes all policy discussion",
//             "It implicitly frames opposition as anti-life"
//         ],
//         correct: 3,
//         explanation: "It embeds a moral framing into the label itself."
//     },

//     {
//         enemy: "",
//         quote: "pro-choice vs pro-abortion",
//         text: "What is the strongest distinction between 'pro-choice' and 'pro-abortion'?",
//         choices: [
//             "They are identical in political usage",
//             "Pro-abortion is always the neutral term",
//             "Pro-choice emphasizes autonomy, pro-abortion implies endorsement of the procedure",
//             "Pro-choice refers only to medical professionals"
//         ],
//         correct: 2,
//         explanation: "Choice frames autonomy, not endorsement."
//     },

//     {
//         enemy: "",
//         quote: "collateral damage vs civilian casualties",
//         text: "What is the strongest critique of 'collateral damage'?",
//         choices: [
//             "It is always inaccurate in reporting",
//             "It is used only by non-military sources",
//             "It refers only to property destruction",
//             "It abstracts human death into impersonal military language"
//         ],
//         correct: 3,
//         explanation: "It dehumanizes civilian deaths."
//     },

//     {
//         enemy: "",
//         quote: "enhanced interrogation vs torture",
//         text: "What is the strongest issue with the term 'enhanced interrogation'?",
//         choices: [
//             "It euphemistically obscures the infliction of pain",
//             "It is legally identical to torture in all jurisdictions",
//             "It refers only to psychological methods",
//             "It is too technical for public reporting"
//         ],
//         correct: 0,
//         explanation: "It sanitizes what may legally constitute torture."
//     },

//     {
//         enemy: "",
//         quote: "developing vs underdeveloped vs Global South",
//         text: "What is the strongest critique of 'underdeveloped'?",
//         choices: [
//             "It is too geographically vague",
//             "It is always a neutral descriptor",
//             "It is used only in economic reports",
//             "It implies a single linear model of progress with Western nations as the standard"
//         ],
//         correct: 3,
//         explanation: "It centers Western development as the norm."
//     },

//     {
//         enemy: "",
//         quote: "Global South vs Third World",
//         text: "What is the strongest reason 'Global South' is preferred over 'Third World'?",
//         choices: [
//             "It is more geographically precise",
//             "It avoids Cold War hierarchy and centers geographic and economic solidarity",
//             "It removes all economic references",
//             "It is the legally defined term in international law"
//         ],
//         correct: 1,
//         explanation: "It removes Cold War ideological ranking."
//     },

//     {
//         enemy: "",
//         quote: "ethnic cleansing vs genocide",
//         text: "What is the strongest distinction between 'ethnic cleansing' and 'genocide'?",
//         choices: [
//             "Ethnic cleansing always refers to cultural erasure only",
//             "They are legally identical in international law",
//             "Genocide implies systematic intent to destroy a group, ethnic cleansing can imply forced removal without explicit extermination",
//             "Genocide is used only for historical events"
//         ],
//         correct: 2,
//         explanation: "Intent to destroy is central to genocide's legal definition."
//     },

//     {
//         enemy: "",
//         quote: "freedom fighter vs terrorist",
//         text: "What is the strongest point about these labels?",
//         choices: [
//             "Terrorist always refers to state-sponsored violence",
//             "They reflect the political perspective of the labeler more than objective criteria",
//             "Freedom fighter always refers to non-violent actors",
//             "They are legally defined categories in international law"
//         ],
//         correct: 1,
//         explanation: "Labeling reflects political alignment."
//     },

//     {
//         enemy: "",
//         quote: "settler vs colonist",
//         text: "What is the strongest distinction between 'settler' and 'colonist'?",
//         choices: [
//             "Colonist more explicitly acknowledges systemic power and displacement structures",
//             "Colonist is always legally accurate while settler is not",
//             "Settler is always negative while colonist is neutral",
//             "They refer to different time periods only"
//         ],
//         correct: 0,
//         explanation: "Colonist implies systemic control structures."
//     },

//     {
//         enemy: "",
//         quote: "explorer vs invader",
//         text: "What is the strongest connotative shift?",
//         choices: [
//             "Explorer emphasizes discovery, invader emphasizes forceful occupation",
//             "Explorer is a legal classification term",
//             "They are interchangeable in historical texts",
//             "Invader is always neutral in geography"
//         ],
//         correct: 0,
//         explanation: "They frame intent and legitimacy differently."
//     },

//     {
//         enemy: "",
//         quote: "unhoused vs homeless",
//         text: "What is the strongest reasoning for using 'unhoused'?",
//         choices: [
//             "It removes all reference to housing systems",
//             "It is more grammatically modern",
//             "It shifts focus toward systemic causes rather than identity labeling",
//             "It reduces emotional impact for readers"
//         ],
//         correct: 2,
//         explanation: "It reframes structural responsibility."
//     },

//     {
//         enemy: "",
//         quote: "slave vs enslaved person",
//         text: "What is the strongest connotative difference?",
//         choices: [
//             "They are interchangeable in academic writing",
//             "Slave is legal terminology, enslaved is informal",
//             "Slave defines identity permanently, enslaved describes imposed condition",
//             "Enslaved is always historical while slave is modern"
//         ],
//         correct: 2,
//         explanation: "It avoids identity reduction."
//     },

//     {
//         enemy: "",
//         quote: "normal vs typical",
//         text: "What is the strongest issue with 'normal'?",
//         choices: [
//             "It implies a single correct standard of human behavior or ability",
//             "It is always offensive in all contexts",
//             "It is less commonly used in speech",
//             "It is too vague for scientific use"
//         ],
//         correct: 0,
//         explanation: "'Normal' creates a hierarchy of expectation."
//     },

//     {
//         enemy: "",
//         quote: "typical vs neurotypical",
//         text: "What is the strongest distinction?",
//         choices: [
//             "Neurotypical is slang for normal behavior",
//             "They are identical in meaning",
//             "Typical is medical terminology, neurotypical is legal",
//             "Typical refers to frequency, neurotypical refers to neurological patterns"
//         ],
//         correct: 3,
//         explanation: "They describe different classification systems."
//     },

//     {
//         enemy: "",
//         quote: "master vs primary (in bedroom context)",
//         text: "What is the strongest critique of 'master'?",
//         choices: [
//             "It refers to furniture placement",
//             "It is required in building codes",
//             "It can imply dominance and ownership hierarchy",
//             "It reduces architectural clarity"
//         ],
//         correct: 2,
//         explanation: "'Master' carries dominance framing."
//     },

//     {
//         enemy: "",
//         quote: "primary vs main bedroom",
//         text: "What is the strongest reason for the shift in language?",
//         choices: [
//             "It improves floor plan accuracy only",
//             "It removes implied hierarchy and dominance language",
//             "It shortens architectural documentation",
//             "It increases real estate prices"
//         ],
//         correct: 1,
//         explanation: "It reduces power-based connotations."
//     },

//     {
//         enemy: "",
//         quote: "climate change vs global warming",
//         text: "What is the strongest distinction between these terms?",
//         choices: [
//             "Climate change is always political, global warming is scientific",
//             "They are identical scientific terms",
//             "Global warming refers only to temperature increase, climate change includes broader system shifts",
//             "Global warming is outdated legal terminology"
//         ],
//         correct: 2,
//         explanation: "Climate change is broader in scope."
//     },

//     {
//         enemy: "",
//         quote: "climate change vs climate emergency",
//         text: "What is the strongest implication of 'climate emergency'?",
//         choices: [
//             "It suggests immediate urgency and crisis-level response framing",
//             "It removes scientific evidence from discussion",
//             "It refers only to weather disasters",
//             "It is less serious than climate change"
//         ],
//         correct: 0,
//         explanation: "Emergency increases urgency framing."
//     },

//     {
//         enemy: "",
//         quote: "prisoner vs detainee",
//         text: "What is the strongest difference in meaning?",
//         choices: [
//             "Prisoner is informal while detainee is legal",
//             "Detainee always refers to criminal sentencing",
//             "They are identical in legal systems",
//             "Detainee implies temporary or pre-trial holding, prisoner implies conviction"
//         ],
//         correct: 3,
//         explanation: "Status differs in legal process stage."
//     },

//     {
//         enemy: "",
//         quote: "criminal vs offender",
//         text: "What is the strongest difference in tone?",
//         choices: [
//             "They are interchangeable in law enforcement",
//             "Offender refers only to minor crimes",
//             "Offender is neutral/legalistic while criminal can carry stronger stigma",
//             "Criminal is always incorrect legally"
//         ],
//         correct: 2,
//         explanation: "Offender is more neutral framing."
//     },

//     {
//         enemy: "",
//         quote: "riot vs protest",
//         text: "What is the strongest framing difference?",
//         choices: [
//             "They refer to identical events with tone differences only",
//             "Riot emphasizes disorder and violence, protest emphasizes civic expression",
//             "Protest is always illegal while riot is legal",
//             "Riot is always peaceful demonstration"
//         ],
//         correct: 1,
//         explanation: "They frame legitimacy and behavior differently."
//     },

//     {
//         enemy: "",
//         quote: "documented vs undocumented",
//         text: "What is the strongest implication of this distinction?",
//         choices: [
//             "It frames legal status without assigning moral judgment in documentation-focused language",
//             "It removes all legal meaning",
//             "It refers only to paperwork formatting",
//             "It only applies to citizenship applications"
//         ],
//         correct: 0,
//         explanation: "It shifts focus to documentation status."
//     },

//     {
//         enemy: "",
//         quote: "neutral vs biased reporting",
//         text: "What is the strongest difference between these concepts?",
//         choices: [
//             "They are identical in journalism practice",
//             "Neutral reporting removes all detail while biased reporting adds detail",
//             "Bias only applies to opinion sections",
//             "Neutral reporting aims for balanced representation while biased reporting favors a perspective"
//         ],
//         correct: 3,
//         explanation: "Neutrality is balance; bias is leaning."
//     },
//     {
//         enemy: "",
//         quote: "pro-life vs anti-abortion",
//         text: "Why is the term 'pro-life' considered more rhetorically loaded than 'anti-abortion'?",
//         choices: [
//             "It suggests that religious belief is the only basis for the position",
//             "It frames the issue as a legal question rather than a moral one",
//             "It removes the medical dimension from the political debate entirely",
//             "It implies that those who disagree with the position are opposed to life itself"
//         ],
//         correct: 3,
//         explanation: "'Pro-life' embeds a moral framing that positions the opposition as anti-life, while 'anti-abortion' is descriptive without that implication."
//     },

//     {
//         enemy: "",
//         quote: "riot vs unrest vs uprising",
//         text: "What is the most significant effect of a journalist choosing 'unrest' over both 'riot' and 'uprising'?",
//         choices: [
//             "It avoids legal implications that come with labeling events as criminal activity",
//             "It removes individual agency from participants and implies a passive social condition",
//             "It suggests the journalist is sympathetic to the participants' political goals",
//             "It signals that the event involved property destruction rather than political protest"
//         ],
//         correct: 1,
//         explanation: "'Unrest' depersonalizes events, framing them as an ambient social condition rather than deliberate political action or criminality."
//     },

//     {
//         enemy: "",
//         quote: "ethnic cleansing vs population transfer",
//         text: "What does the phrase 'population transfer' most significantly obscure compared to 'ethnic cleansing'?",
//         choices: [
//             "It removes the ethnic or racial dimension from the description of the event",
//             "It suggests international legal bodies approved the movement of people",
//             "It frames the event as economically motivated rather than politically motivated",
//             "It implies a voluntary or administrative process rather than forced displacement driven by violence"
//         ],
//         correct: 3,
//         explanation: "'Population transfer' implies a neutral or bureaucratic process, erasing the coercion and violence that defines ethnic cleansing."
//     },

//     {
//         enemy: "",
//         quote: "collateral damage vs civilian casualties",
//         text: "Beyond dehumanization, what structural effect does 'collateral damage' have on how an event is interpreted?",
//         choices: [
//             "It implies the military operation was unsuccessful in achieving its primary objective",
//             "It frames harm to civilians as an unintended byproduct of a legitimate operation rather than a central outcome",
//             "It positions the reporting outlet as sympathetic to the military's perspective",
//             "It suggests that civilian deaths were anticipated and accepted before the operation began"
//         ],
//         correct: 1,
//         explanation: "'Collateral damage' embeds the assumption of legitimacy and intent, framing civilian deaths as accidental side effects rather than primary harms."
//     },

//     {
//         enemy: "",
//         quote: "enhanced interrogation vs torture",
//         text: "What rhetorical function does the word 'enhanced' perform in 'enhanced interrogation'?",
//         choices: [
//             "It implies that the subject of interrogation provided consent to the process",
//             "It signals to readers that the techniques were legally authorized by a court",
//             "It distances the term from emotional language by using a technical register",
//             "It reframes intensity of harm as a positive improvement on standard practice"
//         ],
//         correct: 3,
//         explanation: "'Enhanced' carries connotations of improvement and advancement, masking the nature of the practices being described."
//     },

//     {
//         enemy: "",
//         quote: "freedom fighter vs terrorist vs militant",
//         text: "What does the label 'militant' accomplish that neither 'freedom fighter' nor 'terrorist' does?",
//         choices: [
//             "It implies the individual has received formal military training from a state actor",
//             "It acknowledges the use of force without fully committing to a judgment about legitimacy or morality",
//             "It removes political motivation from the description and focuses purely on behavior",
//             "It suggests the person's actions are legally recognized under international humanitarian law"
//         ],
//         correct: 1,
//         explanation: "'Militant' occupies an ambiguous middle ground, describing armed action without the moral endorsement of 'freedom fighter' or the condemnation of 'terrorist'."
//     },

//     {
//         enemy: "",
//         quote: "undocumented vs illegal vs unauthorized",
//         text: "What is the primary distinction between 'unauthorized' and 'undocumented' as descriptors for immigration status?",
//         choices: [
//             "'Unauthorized' foregrounds a lack of government permission while 'undocumented' foregrounds an absence of paperwork",
//             "'Undocumented' implies criminal intent while 'unauthorized' implies administrative oversight",
//             "'Unauthorized' is used exclusively in legal proceedings while 'undocumented' is used in journalism",
//             "'Undocumented' suggests the person has no identity while 'unauthorized' focuses on legal status"
//         ],
//         correct: 0,
//         explanation: "The two words emphasize different dimensions of the same status \u2014 one frames the state's authority, the other frames the individual's documentation."
//     },

//     {
//         enemy: "",
//         quote: "global warming vs climate change vs climate crisis",
//         text: "Why did some scientists and journalists shift from 'global warming' to 'climate change' before shifting again to 'climate crisis'?",
//         choices: [
//             "'Global warming' was a media term, 'climate change' was a scientific term, and 'crisis' was introduced by policymakers for legislative purposes",
//             "'Global warming' was politically disputed so 'climate change' was adopted as a neutral compromise before 'crisis' was used for advocacy",
//             "'Global warming' implied only temperature increases, 'climate change' captured broader shifts, and 'crisis' added urgency those terms lacked",
//             "'Climate change' was considered too vague so scientists introduced 'global warming' and advocates later introduced 'crisis' for clarity"
//         ],
//         correct: 2,
//         explanation: "Each shift reflected an attempt to more accurately describe the phenomenon's scope and severity, with 'crisis' adding a call to action the previous terms lacked."
//     },

//     {
//         enemy: "",
//         quote: "slave vs enslaved person vs person held in bondage",
//         text: "What does the phrase 'person held in bondage' add beyond what 'enslaved person' already accomplishes?",
//         choices: [
//             "It emphasizes the economic dimensions of the institution more than the personal ones",
//             "It removes the historical specificity that makes 'enslaved' useful in academic contexts",
//             "It makes the physical and legal constraint more explicit while still centering personhood",
//             "It is more commonly accepted in legal contexts than either alternative term"
//         ],
//         correct: 2,
//         explanation: "'Held in bondage' adds visceral specificity about constraint and captivity while maintaining the person-first framing."
//     },

//     {
//         enemy: "",
//         quote: "food insecurity vs hunger vs starvation",
//         text: "Why might 'food insecurity' be criticized as a less effective term than 'hunger' in advocacy contexts?",
//         choices: [
//             "It suggests that food supply rather than poverty is the primary cause of the condition",
//             "It is associated with government policy language that many advocacy groups distrust",
//             "It implies the problem is temporary and situational rather than chronic and systemic",
//             "It uses bureaucratic abstraction that distances readers from the physical reality of not having enough food"
//         ],
//         correct: 3,
//         explanation: "'Food insecurity' is clinical and abstract, while 'hunger' is immediate and visceral \u2014 the difference affects how urgently audiences respond."
//     },

//     {
//         enemy: "",
//         quote: "ethnic food vs cultural cuisine vs international food",
//         text: "What does the label 'ethnic food' imply about the cuisine and the people who eat it that 'cultural cuisine' does not?",
//         choices: [
//             "It positions the food as belonging to an 'other' group relative to a dominant culture that does not require an ethnic label",
//             "It implies the food is prepared using traditional methods that have not been adapted for modern tastes",
//             "It removes the geographic origin of the food and replaces it with a social category instead",
//             "It suggests the cuisine is less nutritionally sophisticated than foods that do not carry the ethnic label"
//         ],
//         correct: 0,
//         explanation: "'Ethnic' implicitly marks certain foods as foreign relative to an unmarked default culture, while 'cultural cuisine' treats all foods as culturally situated."
//     },

//     {
//         enemy: "",
//         quote: "diversity hire vs affirmative action hire vs equity hire",
//         text: "What assumption is embedded in the phrase 'diversity hire' that is not present in 'equity hire'?",
//         choices: [
//             "That the hiring process did not follow standard legal requirements for equal opportunity employment",
//             "That the selected candidate belongs to a group that has historically been overrepresented in the profession",
//             "That the person was selected primarily for demographic representation rather than qualifications or to correct systemic disadvantage",
//             "That the employer was motivated by public relations concerns rather than genuine organizational values"
//         ],
//         correct: 2,
//         explanation: "'Diversity hire' implies the hire was about optics or numbers, while 'equity hire' frames the decision as correcting structural imbalance."
//     },

//     {
//         enemy: "",
//         quote: "welfare vs benefits vs public assistance",
//         text: "Why does 'welfare' carry stronger negative connotations than 'public assistance' despite describing similar programs?",
//         choices: [
//             "It is associated exclusively with urban populations while 'public assistance' is used in rural policy contexts",
//             "It refers specifically to cash payments while 'public assistance' includes a broader range of government services",
//             "It has been repeatedly used in political rhetoric to imply dependency and undeservingness in ways 'public assistance' has not",
//             "It suggests recipients have made poor personal choices while 'public assistance' implies systemic failure instead"
//         ],
//         correct: 2,
//         explanation: "Decades of political framing have loaded 'welfare' with implications of dependency and moral failure that 'public assistance' does not carry."
//     },

//     {
//         enemy: "",
//         quote: "pro-choice vs pro-abortion vs abortion rights",
//         text: "What is the strongest argument for using 'abortion rights' over 'pro-choice' in journalism?",
//         choices: [
//             "It is more specific about what is being chosen and removes ambiguity about the subject",
//             "It describes the specific legal and political stakes without relying on a framing term created by advocates",
//             "It avoids all association with the political movement that has used the term for decades",
//             "It is more acceptable to readers who oppose abortion access than either alternative term"
//         ],
//         correct: 1,
//         explanation: "'Abortion rights' describes the policy issue directly without adopting the framing language of either side of the debate."
//     },

//     {
//         enemy: "",
//         quote: "school choice vs school vouchers vs privatization",
//         text: "What does the phrase 'school choice' obscure that 'school vouchers' makes more explicit?",
//         choices: [
//             "That public funds are being redirected to pay for private or religious school tuition",
//             "That the program requires students to pass entrance exams to access participating schools",
//             "That the policy applies only to families in low-income urban school districts",
//             "That the choice being described is limited to schools within the same geographic district"
//         ],
//         correct: 0,
//         explanation: "'School choice' emphasizes parental agency while 'school vouchers' makes the financial mechanism \u2014 and its implications for public funding \u2014 explicit."
//     }

// ];

// const desertQuestions = [

//     {
//         enemy: "",
//         quote: "'Invasion at the southern border'",
//         text: "What is the strongest reason the word 'invasion' is considered rhetorically powerful in media coverage of immigration?",
//         choices: [
//             "It frames migration through military and threat-based language",
//             "It removes emotional reactions from readers",
//             "It functions as a geographically precise population statistic",
//             "It limits interpretation to economic consequences only"
//         ],
//         correct: 0,
//         explanation: "'Invasion' activates fear, warfare, and national defense framing rather than neutral migration reporting."
//     },

//     {
//         enemy: "",
//         quote: "'Judge blocks use of the word victim in trial'",
//         text: "Why would a judge restrict the use of the word 'victim' before a verdict is reached?",
//         choices: [
//             "Because courts prohibit emotional vocabulary entirely",
//             "Because the word is grammatically inaccurate",
//             "Because jurors are unfamiliar with legal terminology",
//             "Because the word implies legal harm before guilt is established"
//         ],
//         correct: 3,
//         explanation: "'Victim' can imply that a crime definitively occurred before the trial determines guilt."
//     },

//     {
//         enemy: "",
//         quote: "'Chief removed from district job titles'",
//         text: "What concern about the word 'chief' was central to debates discussed in the article set?",
//         choices: [
//             "The word lacks organizational clarity",
//             "The word had become too informal for institutions",
//             "The word can carry historical associations tied to stereotypes of Indigenous people",
//             "The word is legally restricted in education systems"
//         ],
//         correct: 2,
//         explanation: "The concern focused on historical and cultural associations connected to Indigenous stereotypes."
//     },

//     {
//         enemy: "",
//         quote: "'Normal removed from beauty product labels'",
//         text: "What is the strongest criticism of labeling products as 'normal'?",
//         choices: [
//             "It suggests that people outside the category are abnormal or deficient",
//             "It prevents consumers from understanding ingredients",
//             "It increases manufacturing confusion",
//             "It weakens scientific accuracy in chemistry"
//         ],
//         correct: 0,
//         explanation: "'Normal' creates an implied hierarchy of acceptable vs unacceptable bodies or appearances."
//     },

//     // {
//     //     enemy: "",
//     //     quote: "'Residents fear invasion as thousands cross southern border overnight'",
//     //     text: "Rewrite this headline to be more neutral and accurate",
//     //     type: "written",
//     //     explanation: "A neutral headline would focus on facts and numbers without using threat-based language like 'invasion' or 'fear'."
//     // },

//     {
//         enemy: "",
//         quote: "'Spaz removed from song lyrics after criticism'",
//         text: "Why was the word 'spaz' criticized in the article set?",
//         choices: [
//             "It was considered outdated music slang only",
//             "It carries ableist connotations connected to disability-related mockery",
//             "It violates copyright law in music production",
//             "It is considered politically partisan language"
//         ],
//         correct: 1,
//         explanation: "The criticism centered around ableist implications tied to disability and mockery."
//     },

//     {
//         enemy: "",
//         quote: "'Pretext traffic stops'",
//         text: "What is most important about the word 'pretext' in discussions of traffic stops?",
//         choices: [
//             "It removes all concerns about profiling",
//             "It means the stop was automatically illegal",
//             "It refers exclusively to speeding violations",
//             "It suggests the stated reason may conceal another motive"
//         ],
//         correct: 3,
//         explanation: "'Pretext' implies that the visible justification may not be the true reason for the stop."
//     },

//     {
//         enemy: "",
//         quote: "'Racial wealth gap hard to close'",
//         text: "What does the phrase 'wealth gap' emphasize more effectively than simply saying 'poverty'?",
//         choices: [
//             "Short-term emotional hardship only",
//             "Temporary economic inconvenience",
//             "Differences in accumulated resources and opportunity over time",
//             "Individual spending habits"
//         ],
//         correct: 2,
//         explanation: "'Wealth gap' highlights structural inequality involving assets, inheritance, and long-term opportunity."
//     },

//     {
//         enemy: "",
//         quote: "'The homeless' vs 'people experiencing homelessness'",
//         text: "Why do some writers avoid using 'the homeless' as a category label?",
//         choices: [
//             "Because it is grammatically incorrect",
//             "Because it removes emotional seriousness",
//             "Because it is too technical for journalism",
//             "Because it can reduce people to a single condition or identity"
//         ],
//         correct: 3,
//         explanation: "The concern is that identity-first labeling can flatten people into one defining condition."
//     },

//     // {
//     //     enemy: "",
//     //     quote: "'Critics argue pretext traffic stops disproportionately impact marginalized communities'",
//     //     text: "Explain why the word 'pretext' changes the meaning of this headline compared to simply saying 'traffic stops'.",
//     //     type: "written",
//     //     explanation: "'Pretext' implies the stated reason for the stop may not be the real reason, suggesting hidden motives or bias."
//     // },

//     {
//         enemy: "",
//         quote: "'Climate crisis vs climate change'",
//         text: "What is the strongest rhetorical effect of using 'crisis' instead of 'change'?",
//         choices: [
//             "It removes scientific discussion entirely",
//             "It frames the issue as urgent, immediate, and harmful",
//             "It focuses only on weather patterns",
//             "It guarantees political neutrality"
//         ],
//         correct: 1,
//         explanation: "'Crisis' intensifies urgency and moral seriousness."
//     },

//     {
//         enemy: "",
//         quote: "'Boy Scouts changing name after 114 years'",
//         text: "What broader issue does the renaming debate primarily reflect?",
//         choices: [
//             "Whether titles should be shortened for marketing",
//             "Whether institutions should adapt language to changing ideas about inclusion",
//             "Whether scouting activities should become less competitive",
//             "Whether all historical organizations should dissolve"
//         ],
//         correct: 1,
//         explanation: "The debate centered on inclusion, representation, and who feels acknowledged by institutional language."
//     },

//     {
//         enemy: "",
//         quote: "'Chinese Taipei vs Taiwan'",
//         text: "Why is the terminology politically significant in international coverage?",
//         choices: [
//             "Because international sports ban geographic terminology",
//             "Because both names refer to unrelated places",
//             "Because journalists prefer shorter phrasing",
//             "Because naming reflects geopolitical recognition and legitimacy disputes"
//         ],
//         correct: 3,
//         explanation: "The wording carries diplomatic and political implications about sovereignty and recognition."
//     },

//     {
//         enemy: "",
//         quote: "'Paper ceiling'",
//         text: "What does the metaphor 'paper ceiling' most directly critique?",
//         choices: [
//             "Hiring systems that overvalue formal credentials",
//             "Limits on journalism publishing",
//             "Environmental waste from paperwork",
//             "Physical barriers in education buildings"
//         ],
//         correct: 0,
//         explanation: "'Paper ceiling' critiques barriers caused by degree requirements and credential systems."
//     },

//     // {
//     //     enemy: "",
//     //     quote: "'Scientists warn climate crisis could displace millions over the next century'",
//     //     text: "Explain the difference in meaning between calling this a 'climate crisis' versus 'climate change'. Which is stronger and why?",
//     //     type: "written",
//     //     explanation: "'Crisis' signals urgency and immediate danger while 'change' is more neutral and gradual."
//     // },

//     {
//         enemy: "",
//         quote: "'Affordable ethnic food'",
//         text: "What criticism appeared in discussions about 'cheap ethnic food' language?",
//         choices: [
//             "The phrase only applies to imported ingredients",
//             "The phrase can normalize undervaluing labor and culture",
//             "The phrase is scientifically inaccurate",
//             "The phrase increases food safety risks"
//         ],
//         correct: 1,
//         explanation: "Critics argued that describing ethnic food primarily as cheap can devalue the labor and culture behind it."
//     },

//     {
//         enemy: "",
//         quote: "'Book bans vs content review'",
//         text: "Why might different groups choose different labels for the same policy action?",
//         choices: [
//             "Because the terms have identical connotations",
//             "Because schools prohibit persuasive wording",
//             "Because the terms refer to different subjects entirely",
//             "Because the labels frame either censorship or accountability"
//         ],
//         correct: 3,
//         explanation: "Different wording changes whether the action is framed as protection or censorship."
//     },

//     {
//         enemy: "",
//         quote: "'Autistic person vs person with autism'",
//         text: "What is central to the disagreement between identity-first and person-first language?",
//         choices: [
//             "Whether diagnosis systems should be removed",
//             "Whether autism exists medically",
//             "Whether grammar rules require adjectives first",
//             "Whether identity should be integrated into or separated from personhood"
//         ],
//         correct: 3,
//         explanation: "The disagreement concerns how identity and personhood should be linguistically framed."
//     },

//     {
//         enemy: "",
//         quote: "'Google Translate became sexist'",
//         text: "Why are algorithmic translation biases significant?",
//         choices: [
//             "Because algorithms eliminate human influence entirely",
//             "Because translation software ignores all grammar rules",
//             "Because automated systems can reproduce existing societal stereotypes",
//             "Because machines intentionally form political opinions"
//         ],
//         correct: 2,
//         explanation: "Algorithms often inherit patterns and biases present in existing human language data."
//     },

//     // {
//     //     enemy: "",
//     //     quote: "'Book bans vs content review'",
//     //     text: "A school board calls its policy 'content review'. A parent group calls it a 'book ban'. Explain why each group chose their label and what each framing implies.",
//     //     type: "written",
//     //     explanation: "'Content review' frames the action as responsible oversight, while 'book ban' frames it as censorship."
//     // },

//     {
//         enemy: "",
//         quote: "'Lowrider cruising ban'",
//         text: "Why did critics argue the cruising ban carried racial implications?",
//         choices: [
//             "Because all traffic laws are inherently discriminatory",
//             "Because the law targeted only luxury vehicles",
//             "Because enforcement disproportionately affected cultural practices associated with Latino communities",
//             "Because cruising is legally protected speech"
//         ],
//         correct: 2,
//         explanation: "Critics argued the policy disproportionately impacted cultural expression linked to Latino communities."
//     },

//     {
//         enemy: "",
//         quote: "'Mismatched headline'",
//         text: "In Part 3 analysis, what makes a headline 'mismatched' rather than simply biased?",
//         choices: [
//             "It fails to accurately represent the tone or seriousness of the article itself",
//             "It contains more than one adjective",
//             "It includes direct quotations",
//             "It avoids emotional language entirely"
//         ],
//         correct: 0,
//         explanation: "A mismatched headline distorts or misrepresents the actual content or gravity of the article."
//     },

//     {
//         enemy: "",
//         quote: "'Language shapes the way we think'",
//         text: "What core idea from the article set does this statement support?",
//         choices: [
//             "Language influences perception, categorization, and social understanding",
//             "Vocabulary changes only grammar usage",
//             "Thought exists independently from communication systems",
//             "Words have no measurable social impact"
//         ],
//         correct: 0,
//         explanation: "The idea emphasizes that language affects perception and social cognition."
//     },

//     {
//         enemy: "",
//         quote: "'Judge bars attorneys from calling shooting victims victims before verdict is reached'",
//         text: "Why is the repeated use of the word 'victims' considered legally significant in this context?",
//         choices: [
//             "Because jurors are not allowed to hear descriptive language",
//             "Because the word has no accepted legal meaning",
//             "Because the term can imply that a crime has already been conclusively established",
//             "Because courts prohibit emotionally charged vocabulary entirely"
//         ],
//         correct: 2,
//         explanation: "'Victim' can imply confirmed harm and criminal responsibility before guilt has been determined."
//     },

//     // {
//     //     enemy: "",
//     //     quote: "'Media bias growing'",
//     //     text: "A news outlet headlines a protest as 'Violent mob storms city streets'. Rewrite this headline to be more neutral while still being accurate.",
//     //     type: "written",
//     //     explanation: "A neutral headline would describe what happened factually without loaded words like 'mob' or 'storms'."
//     // },

//     {
//         enemy: "",
//         quote: "'Media bias growing'",
//         text: "According to the Part 3 concepts, why can biased headlines have broad societal effects?",
//         choices: [
//             "Because repeated framing can shape public interpretation and reinforce stereotypes",
//             "Because headlines legally determine court rulings",
//             "Because readers never question headlines",
//             "Because all journalism is intentionally deceptive"
//         ],
//         correct: 0,
//         explanation: "Repeated framing influences public perception and can reinforce existing assumptions or systems."
//     },

//     {
//         enemy: "",
//         quote: "'School district removes chief from leadership titles after concerns about cultural implications'",
//         text: "What larger language debate is reflected through this headline?",
//         choices: [
//             "Whether schools should eliminate all job titles entirely",
//             "Whether institutions should reconsider terms tied to historical or cultural stereotypes",
//             "Whether educational systems should avoid organizational hierarchy",
//             "Whether leadership terminology reduces workplace efficiency"
//         ],
//         correct: 1,
//         explanation: "The debate centers on how historical language associations affect representation and inclusion."
//     },

//     {
//         enemy: "",
//         quote: "'Beauty company removes the word normal from product labels to reduce exclusionary messaging'",
//         text: "What is the strongest implication behind describing the language as 'exclusionary'?",
//         choices: [
//             "The term lacks dictionary definition",
//             "The term may indirectly suggest that people outside the category are abnormal or inferior",
//             "The wording only affects advertising regulations",
//             "The company is eliminating all product classifications"
//         ],
//         correct: 1,
//         explanation: "'Normal' creates implied standards that can exclude people who do not fit the category."
//     },

//     {
//         enemy: "",
//         quote: "'Experts say widening racial wealth gap reflects generations of unequal opportunity'",
//         text: "Why is the phrase 'generations of unequal opportunity' rhetorically significant?",
//         choices: [
//             "It focuses entirely on short-term spending decisions",
//             "It describes temporary financial instability only",
//             "It frames inequality as structural and long-term rather than purely individual",
//             "It removes historical context from economic issues"
//         ],
//         correct: 2,
//         explanation: "The wording emphasizes systemic inequality developing across generations."
//     },
//     {
//         enemy: "",
//         quote: "'Officials describe border situation as a humanitarian concern'",
//         text: "What is the strongest effect of using 'humanitarian concern' rather than 'crisis' or 'emergency' in official language?",
//         choices: [
//             "It signals to international bodies that the government is requesting foreign aid assistance",
//             "It frames the situation as caused by external forces rather than domestic policy decisions",
//             "It acknowledges suffering while minimizing the urgency that would demand immediate policy response",
//             "It positions the government as compassionate without committing to a specific course of action"
//         ],
//         correct: 2,
//         explanation: "'Humanitarian concern' is softer than 'crisis' \u2014 it acknowledges a problem without triggering the political pressure that emergency language would create."
//     },

//     {
//         enemy: "",
//         quote: "'Source says leader showed poor judgment'",
//         text: "What does attributing a claim to 'a source' rather than naming the speaker most significantly do to the reader's interpretation?",
//         choices: [
//             "It protects the credibility of the publication by distancing it from an unverified claim",
//             "It signals that the information comes from inside the organization being criticized",
//             "It makes the claim harder to verify while allowing it to shape perception without accountability",
//             "It implies the journalist has multiple sources who all agree on the same interpretation"
//         ],
//         correct: 2,
//         explanation: "Anonymous sourcing creates influence without accountability \u2014 readers cannot evaluate the source's bias, motive, or reliability."
//     },

//     {
//         enemy: "",
//         quote: "'Mistakes were made'",
//         text: "What grammatical feature of 'mistakes were made' makes it rhetorically evasive?",
//         choices: [
//             "The past tense creates distance from the event and implies the problem has already been resolved",
//             "The vague noun 'mistakes' avoids specifying what actions were taken or what harm resulted",
//             "The plural form of 'mistakes' implies shared responsibility across multiple parties rather than one individual",
//             "The passive voice removes the subject, eliminating any named actor who is responsible for the mistakes"
//         ],
//         correct: 3,
//         explanation: "Passive voice is the key move \u2014 it describes an outcome without a responsible actor, making accountability structurally impossible from the sentence itself."
//     },

//     {
//         enemy: "",
//         quote: "'Officers responded to a call about an armed individual'",
//         text: "What does framing a police shooting story with 'armed individual' in the opening line most significantly do?",
//         choices: [
//             "It provides the legally required context for reporting on incidents involving law enforcement",
//             "It primes readers to view the use of force as potentially justified before the facts are presented",
//             "It removes emotional language and positions the report as neutral and factual from the outset",
//             "It signals that the journalist has confirmed the presence of a weapon through independent sources"
//         ],
//         correct: 1,
//         explanation: "Leading with 'armed' establishes a threat frame before any other context is given, shaping how readers evaluate everything that follows."
//     },

//     {
//         enemy: "",
//         quote: "'Critics say the policy has unintended consequences'",
//         text: "What does the phrase 'unintended consequences' do to the political framing of a harmful policy outcome?",
//         choices: [
//             "It positions critics of the policy as overreacting to outcomes that were always part of the plan",
//             "It frames the harm as temporary rather than structural, suggesting it will resolve on its own",
//             "It implies the harm was not foreseeable and therefore removes moral responsibility from policymakers",
//             "It signals that the policy will be revised once the consequences have been fully documented"
//         ],
//         correct: 2,
//         explanation: "'Unintended' carries an implicit defense \u2014 if harm wasn't intended, the argument goes, those who caused it cannot be blamed for it."
//     },

//     {
//         enemy: "",
//         quote: "'The city\\'s troubled neighborhood'",
//         text: "What does 'troubled neighborhood' signal to readers that 'low-income neighborhood' or 'disinvested neighborhood' does not?",
//         choices: [
//             "It is a more precise descriptor because it encompasses social, economic, and safety conditions together",
//             "It suggests the area has a history of civil unrest that other descriptors do not capture",
//             "It avoids the economic framing that might lead readers to demand government investment as a solution",
//             "It implies the problem originates within the community rather than from external economic or political forces"
//         ],
//         correct: 3,
//         explanation: "'Troubled' locates the problem inside the neighborhood, while 'disinvested' locates the cause outside it \u2014 in the decisions of banks, governments, and institutions."
//     },

//     {
//         enemy: "",
//         quote: "'Senator questions the integrity of the election'",
//         text: "What does 'questions the integrity' allow a headline to imply without directly stating?",
//         choices: [
//             "That other officials share the senator's concern but have not yet spoken publicly about it",
//             "That fraud or misconduct may have occurred, without requiring the publication to verify or endorse the claim",
//             "That the election process failed to meet standards set by independent international observers",
//             "That the senator has legal standing to challenge the results in a court of law"
//         ],
//         correct: 1,
//         explanation: "Framing a claim as a 'question' lets publications amplify allegations without taking responsibility for their truth or falsity."
//     },

//     {
//         enemy: "",
//         quote: "'The incident sparked debate'",
//         text: "What does the word 'debate' imply about an event that 'outrage' or 'condemnation' would not?",
//         choices: [
//             "That there are legitimate perspectives on both sides, even when one side may represent a clear ethical violation",
//             "That the public reaction has been measured and intellectual rather than emotional or visceral",
//             "That journalists are uncertain about the facts and are waiting for more information before taking a position",
//             "That the event is ongoing and has not yet produced a clear social or political response"
//         ],
//         correct: 0,
//         explanation: "'Debate' implies two equally valid sides, which can normalize or legitimize positions that most people would reject outright."
//     },

//     {
//         enemy: "",
//         quote: "'The program serves at-risk youth'",
//         text: "What does the label 'at-risk' imply about the young people it describes that 'underserved youth' does not?",
//         choices: [
//             "It suggests the young people have already engaged in behaviors that put them in conflict with the law",
//             "It is used exclusively in criminal justice contexts and carries legal definitions that affect how services are delivered",
//             "It implies that intervention is necessary to prevent harm to society rather than to benefit the young people themselves",
//             "It locates risk within the individual or their environment rather than in the systems that have failed to support them"
//         ],
//         correct: 3,
//         explanation: "'At-risk' frames risk as something the youth carry, while 'underserved' frames the problem as a failure of institutions to provide adequate support."
//     },

//     {
//         enemy: "",
//         quote: "'The company faced backlash over its diversity statement'",
//         text: "What does 'backlash' imply about the public reaction that 'criticism' or 'opposition' does not?",
//         choices: [
//             "It implies the company's statement was well-intentioned and that the reaction was therefore unfair",
//             "It signals that the reaction was large in scale but not sustained beyond the initial news cycle",
//             "It frames the reaction as excessive or emotionally driven rather than principled or reasoned",
//             "It suggests the reaction came primarily from people outside the company rather than employees"
//         ],
//         correct: 2,
//         explanation: "'Backlash' carries a connotation of overreaction, subtly delegitimizing the response even before its content is examined."
//     },

//     {
//         enemy: "",
//         quote: "'Lawmakers clash over spending bill'",
//         text: "What does the word 'clash' imply about a legislative disagreement that 'debate' or 'negotiate' does not?",
//         choices: [
//             "It implies that neither side is willing to compromise and that the bill is unlikely to pass as written",
//             "It suggests that the disagreement has become personal rather than remaining focused on policy differences",
//             "It signals that the disagreement has spilled outside the legislative chamber into public confrontation",
//             "It frames political disagreement as conflict and opposition rather than as a functional part of democratic deliberation"
//         ],
//         correct: 3,
//         explanation: "'Clash' uses combat language that frames politics as warfare, which can reduce public trust in institutions and normalize dysfunction."
//     },

//     {
//         enemy: "",
//         quote: "'Experts are divided on the issue'",
//         text: "What is the strongest critique of using 'experts are divided' in coverage of a scientific issue?",
//         choices: [
//             "It removes the journalist's ability to explain why certain expert opinions carry more evidential weight than others",
//             "It can create a false impression of equal disagreement when one position is actually held by a strong majority of specialists",
//             "It implies that non-expert public opinion is as valid as the positions held by credentialed researchers",
//             "It is used to avoid taking a position on a politically contentious issue without examining the actual evidence"
//         ],
//         correct: 1,
//         explanation: "False balance \u2014 presenting fringe dissent as equivalent to scientific consensus \u2014 is one of the most significant failures of 'both sides' journalism."
//     },

//     {
//         enemy: "",
//         quote: "'The suspect was confrontational with officers'",
//         text: "What does 'confrontational' do in a police incident report that 'uncooperative' or 'frightened' would not?",
//         choices: [
//             "It implies the subject initiated or escalated conflict, which can frame subsequent use of force as a response rather than an initiation",
//             "It removes emotional context from the encounter and presents the subject's behavior as a deliberate choice",
//             "It signals to readers that the officers involved exercised appropriate restraint given the level of threat",
//             "It provides a legally precise description of behavior that can be used to justify specific law enforcement responses"
//         ],
//         correct: 0,
//         explanation: "'Confrontational' assigns agency and aggression to the subject, framing the encounter in a way that preemptively justifies officer response."
//     },

//     {
//         enemy: "",
//         quote: "'The school board voted to restrict access to certain materials'",
//         text: "What is the most significant framing difference between 'restrict access' and 'ban' in coverage of book removal policies?",
//         choices: [
//             "'Restrict access' is used by opponents of the policy while 'ban' is preferred by supporters as a neutral descriptor",
//             "'Restrict access' implies a partial or procedural limitation while 'ban' implies a total and ideologically motivated prohibition",
//             "'Ban' is legally precise while 'restrict access' is used when the policy has not yet been formally voted on",
//             "'Ban' implies the materials were harmful while 'restrict access' implies the decision was made for logistical reasons"
//         ],
//         correct: 1,
//         explanation: "The word 'ban' carries connotations of censorship and ideological control that 'restrict access' softens into a bureaucratic procedure."
//     },

//     {
//         enemy: "",
//         quote: "'The neighborhood has seen an uptick in criminal activity'",
//         text: "What does the phrase 'uptick in criminal activity' obscure compared to reporting specific crime statistics?",
//         choices: [
//             "It creates an impression of widespread disorder without specifying what crimes occurred, how many, or compared to what baseline",
//             "It implies the increase is temporary and likely to reverse without requiring any policy intervention",
//             "It suggests the crimes are connected to each other rather than being isolated incidents in the same area",
//             "It removes the racial and economic dimensions of crime reporting that specific statistics would make visible"
//         ],
//         correct: 0,
//         explanation: "Vague language like 'uptick' allows crime narratives to circulate without the accountability that specific, contextualized data would require."
//     },

//     {
//         enemy: "",
//         quote: "'The politician made controversial remarks'",
//         text: "What does describing remarks as 'controversial' do that 'offensive' or 'false' would not?",
//         choices: [
//             "It implies the remarks were deliberately designed to provoke a reaction rather than to communicate a position",
//             "It signals that the journalist personally disagrees with the remarks but cannot verify their inaccuracy",
//             "It frames the problem as one of public reception rather than of the content or accuracy of what was said",
//             "It protects the publication from legal liability by avoiding a direct claim about truth or harm"
//         ],
//         correct: 2,
//         explanation: "'Controversial' locates the problem in how people feel about the remarks rather than in what the remarks actually said or whether they were true."
//     },

//     {
//         enemy: "",
//         quote: "'The administration\\'s messaging on the issue has been unclear'",
//         text: "What does 'unclear messaging' imply about a policy failure that 'deception' or 'contradiction' does not?",
//         choices: [
//             "It implies that the administration lacks the technical capacity to communicate complex policies effectively",
//             "It frames the audience as the source of confusion rather than the administration as the source of the problem",
//             "It signals that the journalist was unable to obtain comment from the administration before publication",
//             "It suggests the problem is one of communication rather than of intention or integrity, softening the severity of the failure"
//         ],
//         correct: 3,
//         explanation: "'Unclear messaging' frames a potential lie or contradiction as a PR problem, which reduces accountability significantly."
//     },

//     {
//         enemy: "",
//         quote: "'The organization faces scrutiny over its practices'",
//         text: "What does 'faces scrutiny' imply that 'is under investigation' or 'is accused of wrongdoing' does not?",
//         choices: [
//             "It implies the organization is cooperating with whatever process is examining its practices",
//             "It suggests the scrutiny is likely to result in changes to the organization's leadership structure",
//             "It acknowledges attention without implying guilt or confirmed wrongdoing, protecting the publication from making unverified claims",
//             "It signals that the scrutiny is coming from within the organization rather than from an external body"
//         ],
//         correct: 2,
//         explanation: "'Faces scrutiny' is deliberately vague \u2014 it gestures at a problem without specifying its nature, source, or severity."
//     },

//     {
//         enemy: "",
//         quote: "'The data suggests a correlation between poverty and crime'",
//         text: "What is the strongest problem with reporting a correlation between poverty and crime without further context?",
//         choices: [
//             "It can imply a causal relationship that the data does not establish, reinforcing stereotypes about poor communities",
//             "It implies that crime rates are higher in poor communities than data from comparable wealthy communities would show",
//             "It removes the distinction between violent crime and property crime that is essential for accurate interpretation",
//             "It suggests that poverty is the only variable worth examining when multiple systemic factors may be involved"
//         ],
//         correct: 0,
//         explanation: "Correlation does not imply causation, and presenting this data without context can naturalize poverty as a predictor of criminality rather than examining shared causes."
//     },

//     {
//         enemy: "",
//         quote: "'Some say the policy is discriminatory'",
//         text: "What is the rhetorical effect of 'some say' as an attribution device in journalism?",
//         choices: [
//             "It implies the journalist personally disagrees with the claim but is obligated to present it for balance",
//             "It protects the publication legally by attributing the claim to unnamed parties rather than stating it directly",
//             "It signals that the claim represents a minority viewpoint that has not gained mainstream acceptance",
//             "It allows a publication to introduce a claim into coverage without evaluating its accuracy or identifying who is making it"
//         ],
//         correct: 3,
//         explanation: "'Some say' is a journalistic hedge that circulates claims \u2014 including false ones \u2014 while insulating the publication from accountability for their truth."
//     },

//     {
//         enemy: "",
//         quote: "'The report raises questions about leadership'",
//         text: "What does 'raises questions' accomplish in a headline that 'reveals wrongdoing' or 'documents failure' would not?",
//         choices: [
//             "It introduces the possibility of wrongdoing while committing to nothing, allowing the headline to generate concern without making a verifiable claim",
//             "It implies the leadership being examined is cooperating with the report rather than being accused by it",
//             "It signals to readers that the report is preliminary and that further investigation is needed before conclusions can be drawn",
//             "It protects the publication from defamation liability by framing the content as interrogative rather than declarative"
//         ],
//         correct: 0,
//         explanation: "'Raises questions' is a headline construction that does the work of an accusation while maintaining the appearance of neutrality and avoiding factual commitment."
//     },

//     {
//         enemy: "",
//         quote: "'The community is resilient'",
//         text: "What is the strongest critique of describing a community that has experienced harm or disaster as 'resilient'?",
//         choices: [
//             "It suggests that the community does not need long-term investment because it has demonstrated the ability to recover on its own",
//             "It can shift focus from the systems that caused harm to the community's capacity to absorb it, reducing pressure for structural change",
//             "It implies that the community has experienced hardship before and is therefore accustomed to managing without external support",
//             "It removes the political dimension of the harm by framing the community's response as an emotional or cultural characteristic"
//         ],
//         correct: 1,
//         explanation: "'Resilient' is often used in ways that celebrate communities for surviving harm rather than demanding accountability from those who caused it."
//     }

//     // {
//     //     enemy: "",
//     //     quote: "'Community advocates urge media outlets to stop referring to unhoused residents as the homeless'",
//     //     text: "Explain why advocates prefer 'people experiencing homelessness' over 'the homeless'. What does each phrase imply about the person?",
//     //     type: "written",
//     //     explanation: "'The homeless' reduces people to a single identity, while 'people experiencing homelessness' treats housing as a circumstance rather than a defining trait."
//     // }

// ];



const swampQuestions = [

    {
        enemy: "",
        quote: "food desert vs food apartheid",
        text: "What does the term 'food desert' most significantly obscure?",
        choices: [
            "It focuses too heavily on physical geography over urban planning details",
            "It implies rural areas are more affected than urban areas",
            "It can suggest the absence is natural rather than systemically produced",
            "It overemphasizes food availability instead of nutrition quality"
        ],
        correct: 2,
        explanation: "It naturalizes inequality instead of linking it to systems."
    },

    {
        enemy: "",
        quote: "food desert vs food apartheid",
        text: "Why is 'food apartheid' considered a more structural term?",
        choices: [
            "It focuses primarily on economic pricing differences",
            "It explicitly highlights deliberate systems shaping unequal access",
            "It eliminates geographic reference entirely",
            "It is more commonly used in scientific literature"
        ],
        correct: 1,
        explanation: "It centers intentional systemic inequality."
    },

    {
        enemy: "",
        quote: "master bedroom vs primary bedroom",
        text: "What is the strongest critique of 'master bedroom' terminology?",
        choices: [
            "It may imply ownership and hierarchy embedded in housing language",
            "It creates ambiguity in architectural blueprints",
            "It is less commonly used in modern real estate listings",
            "It confuses buyers about room size standards"
        ],
        correct: 0,
        explanation: "'Master' carries hierarchical connotations."
    },

    {
        enemy: "",
        quote: "master bedroom vs primary bedroom",
        text: "Why is 'primary bedroom' preferred in revised terminology?",
        choices: [
            "It standardizes architectural labeling across regions",
            "It removes dominance-based language associations",
            "It increases clarity about room function",
            "It shortens property descriptions for listings"
        ],
        correct: 1,
        explanation: "It reduces hierarchical framing."
    },

    {
        enemy: "",
        quote: "suspect vs criminal",
        text: "What is the most precise distinction between 'suspect' and 'criminal'?",
        choices: [
            "Suspect refers to minor offenses, criminal to major ones",
            "Suspect indicates alleged involvement, criminal implies confirmed guilt",
            "Suspect is informal, criminal is formal reporting language",
            "Suspect is used only in civil cases, criminal in legal cases"
        ],
        correct: 1,
        explanation: "Only 'criminal' implies conviction."
    },

    {
        enemy: "",
        quote: "suspect vs criminal",
        text: "What is the strongest risk in early use of the word 'criminal' in reporting?",
        choices: [
            "It limits reporting accuracy across agencies",
            "It creates unnecessary technical detail",
            "It may influence perception before legal confirmation is established",
            "It reduces emotional tone in journalism"
        ],
        correct: 2,
        explanation: "It can imply guilt prematurely."
    },

    {
        enemy: "",
        quote: "neurotypical vs neurodivergent vs normal",
        text: "What is the strongest issue with the word 'normal' in this context?",
        choices: [
            "It excludes only extreme neurological cases",
            "It implies a single dominant cognitive standard as the baseline",
            "It is too informal for academic writing",
            "It is medically outdated terminology in clinical diagnosis"
        ],
        correct: 1,
        explanation: "'Normal' establishes a normative hierarchy."
    },

    {
        enemy: "",
        quote: "neurodivergent vs neurotypical",
        text: "What is the strongest purpose of the term 'neurodivergent'?",
        choices: [
            "It categorizes cognitive differences without ranking them as deficits",
            "It replaces medical diagnosis systems entirely",
            "It defines neurological conditions more narrowly than older terms",
            "It separates clinical from educational terminology"
        ],
        correct: 0,
        explanation: "It avoids value judgment."
    },

    {
        enemy: "",
        quote: "terrorists vs insurrectionists vs rebels",
        text: "Why are these terms often contested in media?",
        choices: [
            "They describe different levels of organization size only",
            "They differ primarily in legal jurisdiction usage",
            "They reflect different judgments about legitimacy and political framing",
            "They are interchangeable but vary by country"
        ],
        correct: 2,
        explanation: "Each term shows political perspective."
    },

    {
        enemy: "",
        quote: "terrorists vs insurrectionists",
        text: "What is the strongest effect of labeling a group 'insurrectionists' instead of 'terrorists'?",
        choices: [
            "It neutralizes emotional tone in reporting",
            "It removes legal accountability entirely",
            "It shifts focus toward political rebellion rather than indiscriminate violence",
            "It increases geographic specificity of events"
        ],
        correct: 2,
        explanation: "It reframes perceived legitimacy."
    },

    {
        enemy: "",
        quote: "illegal alien vs undocumented immigrant",
        text: "What is the strongest critique of the term 'illegal alien'?",
        choices: [
            "It is less precise than immigration law terminology",
            "It implies a legal status that has not been established in court",
            "It refers only to criminal cases in court reporting",
            "It combines legal status with dehumanizing language"
        ],
        correct: 3,
        explanation: "It merges identity with illegality and othering."
    },

    {
        enemy: "",
        quote: "illegal alien vs undocumented immigrant",
        text: "What is the primary function of shifting to 'undocumented immigrant'?",
        choices: [
            "It simplifies legal classification systems",
            "It reduces emotional impact in public discourse",
            "It emphasizes migration patterns over status",
            "It separates legal documentation status from personal identity"
        ],
        correct: 3,
        explanation: "It avoids dehumanization."
    },

    {
        enemy: "",
        quote: "victim vs survivor",
        text: "What is the strongest conceptual difference between 'victim' and 'survivor'?",
        choices: [
            "Victim emphasizes harm endured, survivor emphasizes continuation and agency",
            "Survivor removes acknowledgment of harm entirely",
            "Victim is legal terminology, survivor is social terminology",
            "Victim refers only to past events, survivor to ongoing situations"
        ],
        correct: 0,
        explanation: "It shifts focus from harm to resilience."
    },

    {
        enemy: "",
        quote: "victim vs survivor",
        text: "Why might 'survivor' be preferred in advocacy contexts?",
        choices: [
            "It reduces emotional sensitivity in reporting",
            "It reframes individuals through resilience rather than harm identity",
            "It avoids referencing the original event entirely",
            "It is more legally accurate than victim"
        ],
        correct: 1,
        explanation: "It emphasizes empowerment framing."
    },

    {
        enemy: "",
        quote: "climate change vs climate crisis",
        text: "What is the strongest difference in implication between these terms?",
        choices: [
            "Climate crisis emphasizes urgency and severity more explicitly",
            "Climate crisis removes scientific data from discussion",
            "They are identical in journalistic usage",
            "Climate change is used only in scientific contexts"
        ],
        correct: 0,
        explanation: "Crisis implies immediate danger."
    },

    {
        enemy: "",
        quote: "riot vs uprising",
        text: "What is the strongest framing difference between 'riot' and 'uprising'?",
        choices: [
            "Riot emphasizes chaos and criminality, uprising emphasizes political motivation",
            "They are identical terms used in different regions",
            "Uprising always implies violence while riot does not",
            "Riot is always legally accurate while uprising is not"
        ],
        correct: 0,
        explanation: "Framing shapes perceived legitimacy."
    },

    {
        enemy: "",
        quote: "pro-life vs anti-abortion",
        text: "What rhetorical effect does the term 'pro-life' create that 'anti-abortion' does not?",
        choices: [
            "It is used only in religious contexts",
            "It is scientifically inaccurate",
            "It removes all policy discussion",
            "It frames the position around life, implying the opposing view is against life itself"
        ],
        correct: 3,
        explanation: "The term embeds a moral framing into the label itself — both 'pro-life' and 'pro-choice' are self-chosen terms with built-in framing."
    },

    {
        enemy: "",
        quote: "pro-choice vs pro-abortion",
        text: "What is the strongest distinction between 'pro-choice' and 'pro-abortion'?",
        choices: [
            "They are identical in political usage",
            "'Pro-abortion' is a label more often applied by opponents than self-adopted by advocates",
            "Pro-choice emphasizes autonomy, pro-abortion implies endorsement of the procedure",
            "Pro-choice refers only to medical professionals"
        ],
        correct: 2,
        explanation: "Choice frames autonomy, not endorsement."
    },

    {
        enemy: "",
        quote: "collateral damage vs civilian casualties",
        text: "What is the strongest critique of 'collateral damage'?",
        choices: [
            "It is always inaccurate in reporting",
            "It is used only by non-military sources",
            "It refers only to property destruction",
            "It abstracts human death into impersonal military language"
        ],
        correct: 3,
        explanation: "It dehumanizes civilian deaths."
    },

    {
        enemy: "",
        quote: "enhanced interrogation vs torture",
        text: "What is the strongest issue with the term 'enhanced interrogation'?",
        choices: [
            "It euphemistically obscures the infliction of pain",
            "It is legally identical to torture in all jurisdictions",
            "It refers only to psychological methods",
            "It is too technical for public reporting"
        ],
        correct: 0,
        explanation: "It sanitizes what may legally constitute torture."
    },

    {
        enemy: "",
        quote: "developing vs underdeveloped vs Global South",
        text: "What is the strongest critique of 'underdeveloped'?",
        choices: [
            "It is too geographically vague",
            "It is always a neutral descriptor",
            "It is used only in economic reports",
            "It implies a single linear model of progress with Western nations as the standard"
        ],
        correct: 3,
        explanation: "It centers Western development as the norm."
    },

    {
        enemy: "",
        quote: "Global South vs Third World",
        text: "What is the strongest reason 'Global South' is preferred over 'Third World'?",
        choices: [
            "It is more geographically precise",
            "It avoids Cold War hierarchy and centers geographic and economic solidarity",
            "It removes all economic references",
            "It is the legally defined term in international law"
        ],
        correct: 1,
        explanation: "It removes Cold War ideological ranking."
    },

    {
        enemy: "",
        quote: "ethnic cleansing vs genocide",
        text: "What is the strongest distinction between 'ethnic cleansing' and 'genocide'?",
        choices: [
            "Ethnic cleansing always refers to cultural erasure only",
            "They are legally identical in international law",
            "Genocide implies systematic intent to destroy a group, ethnic cleansing can imply forced removal without explicit extermination",
            "Genocide is used only for historical events"
        ],
        correct: 2,
        explanation: "Intent to destroy is central to genocide's legal definition."
    },

    {
        enemy: "",
        quote: "freedom fighter vs terrorist",
        text: "What is the strongest point about these labels?",
        choices: [
            "Terrorist always refers to state-sponsored violence",
            "They reflect the political perspective of the labeler more than objective criteria",
            "Freedom fighter always refers to non-violent actors",
            "They are legally defined categories in international law"
        ],
        correct: 1,
        explanation: "Labeling reflects political alignment."
    },

    {
        enemy: "",
        quote: "settler vs colonist",
        text: "What is the strongest distinction between 'settler' and 'colonist'?",
        choices: [
            "Colonist more explicitly acknowledges systemic power and displacement structures",
            "Colonist is always legally accurate while settler is not",
            "Settler is always negative while colonist is neutral",
            "They refer to different time periods only"
        ],
        correct: 0,
        explanation: "Colonist implies systemic control structures."
    },

    {
        enemy: "",
        quote: "explorer vs invader",
        text: "What is the strongest connotative shift?",
        choices: [
            "Explorer emphasizes discovery, invader emphasizes forceful occupation",
            "Explorer is a legal classification term",
            "They are interchangeable in historical texts",
            "Invader is always neutral in geography"
        ],
        correct: 0,
        explanation: "They frame intent and legitimacy differently."
    },

    {
        enemy: "",
        quote: "unhoused vs homeless",
        text: "What is the strongest reasoning for using 'unhoused'?",
        choices: [
            "It removes all reference to housing systems",
            "It is more grammatically modern",
            "It shifts focus toward systemic causes rather than identity labeling",
            "It reduces emotional impact for readers"
        ],
        correct: 2,
        explanation: "It reframes structural responsibility."
    },

    {
        enemy: "",
        quote: "slave vs enslaved person",
        text: "What is the strongest connotative difference?",
        choices: [
            "They are interchangeable in academic writing",
            "Slave is legal terminology, enslaved is informal",
            "Slave defines identity permanently, enslaved describes imposed condition",
            "Enslaved is always historical while slave is modern"
        ],
        correct: 2,
        explanation: "It avoids identity reduction."
    },

    {
        enemy: "",
        quote: "normal vs typical",
        text: "What is the strongest issue with 'normal'?",
        choices: [
            "It implies a single correct standard of human behavior or ability",
            "It is always offensive in all contexts",
            "It is less commonly used in speech",
            "It is too vague for scientific use"
        ],
        correct: 0,
        explanation: "'Normal' creates a hierarchy of expectation."
    },

    {
        enemy: "",
        quote: "typical vs neurotypical",
        text: "What is the strongest distinction?",
        choices: [
            "Neurotypical is slang for normal behavior",
            "They are identical in meaning",
            "Typical is medical terminology, neurotypical is legal",
            "Typical refers to frequency, neurotypical refers to neurological patterns"
        ],
        correct: 3,
        explanation: "They describe different classification systems."
    },

    {
        enemy: "",
        quote: "master vs primary (in bedroom context)",
        text: "What is the strongest critique of 'master'?",
        choices: [
            "It refers to furniture placement",
            "It is required in building codes",
            "It can imply dominance and ownership hierarchy",
            "It reduces architectural clarity"
        ],
        correct: 2,
        explanation: "'Master' carries dominance framing."
    },

    {
        enemy: "",
        quote: "primary vs main bedroom",
        text: "What is the strongest reason for the shift in language?",
        choices: [
            "It improves floor plan accuracy only",
            "It removes implied hierarchy and dominance language",
            "It shortens architectural documentation",
            "It increases real estate prices"
        ],
        correct: 1,
        explanation: "It reduces power-based connotations."
    },

    {
        enemy: "",
        quote: "climate change vs global warming",
        text: "What is the strongest distinction between these terms?",
        choices: [
            "Climate change is always political, global warming is scientific",
            "They are identical scientific terms",
            "Global warming refers only to temperature increase, climate change includes broader system shifts",
            "Global warming is outdated legal terminology"
        ],
        correct: 2,
        explanation: "Climate change is broader in scope."
    },

    {
        enemy: "",
        quote: "climate change vs climate emergency",
        text: "What is the strongest implication of 'climate emergency'?",
        choices: [
            "It suggests immediate urgency and crisis-level response framing",
            "It removes scientific evidence from discussion",
            "It refers only to weather disasters",
            "It is less serious than climate change"
        ],
        correct: 0,
        explanation: "Emergency increases urgency framing."
    },

    {
        enemy: "",
        quote: "prisoner vs detainee",
        text: "What is the strongest difference in meaning?",
        choices: [
            "Prisoner is informal while detainee is legal",
            "Detainee always refers to criminal sentencing",
            "They are identical in legal systems",
            "Detainee implies temporary or pre-trial holding, prisoner implies conviction"
        ],
        correct: 3,
        explanation: "Status differs in legal process stage."
    },

    {
        enemy: "",
        quote: "criminal vs offender",
        text: "What is the strongest difference in tone?",
        choices: [
            "They are interchangeable in law enforcement",
            "Offender refers only to minor crimes",
            "Offender is neutral/legalistic while criminal can carry stronger stigma",
            "Criminal is always incorrect legally"
        ],
        correct: 2,
        explanation: "Offender is more neutral framing."
    },

    {
        enemy: "",
        quote: "riot vs protest",
        text: "What is the strongest framing difference?",
        choices: [
            "They refer to identical events with tone differences only",
            "Riot emphasizes disorder and violence, protest emphasizes civic expression",
            "Protest is always illegal while riot is legal",
            "Riot is always peaceful demonstration"
        ],
        correct: 1,
        explanation: "They frame legitimacy and behavior differently."
    },

    {
        enemy: "",
        quote: "documented vs undocumented",
        text: "What is the strongest implication of this distinction?",
        choices: [
            "It frames legal status without assigning moral judgment in documentation-focused language",
            "It removes all legal meaning",
            "It refers only to paperwork formatting",
            "It only applies to citizenship applications"
        ],
        correct: 0,
        explanation: "It shifts focus to documentation status."
    },

    {
        enemy: "",
        quote: "neutral vs biased reporting",
        text: "What is the strongest difference between these concepts?",
        choices: [
            "They are identical in journalism practice",
            "Neutral reporting removes all detail while biased reporting adds detail",
            "Bias only applies to opinion sections",
            "Neutral reporting aims for balanced representation while biased reporting favors a perspective"
        ],
        correct: 3,
        explanation: "Neutrality is balance; bias is leaning."
    }

];

const desertQuestions = [

    {
        enemy: "",
        quote: "'Invasion at the southern border'",
        text: "What is the strongest reason the word 'invasion' is considered rhetorically powerful in media coverage of immigration?",
        choices: [
            "It frames migration through military and threat-based language",
            "It removes emotional reactions from readers",
            "It functions as a geographically precise population statistic",
            "It limits interpretation to economic consequences only"
        ],
        correct: 0,
        explanation: "'Invasion' draws on military and national security framing, which shapes how readers interpret the scale and urgency of migration events."
    },

    {
        enemy: "",
        quote: "'Judge blocks use of the word victim in trial'",
        text: "Why would a judge restrict the use of the word 'victim' before a verdict is reached?",
        choices: [
            "Because courts prohibit emotional vocabulary entirely",
            "Because the word is grammatically inaccurate",
            "Because jurors are unfamiliar with legal terminology",
            "Because the word implies legal harm before guilt is established"
        ],
        correct: 3,
        explanation: "'Victim' can imply that a crime definitively occurred before the trial determines guilt."
    },

    {
        enemy: "",
        quote: "'Chief removed from district job titles'",
        text: "What concern about the word 'chief' was central to debates discussed in the article set?",
        choices: [
            "The word lacks organizational clarity",
            "The word had become too informal for institutions",
            "The word can carry historical associations tied to stereotypes of Indigenous people",
            "The word is legally restricted in education systems"
        ],
        correct: 2,
        explanation: "The concern focused on historical and cultural associations connected to Indigenous stereotypes."
    },

    {
        enemy: "",
        quote: "'Normal removed from beauty product labels'",
        text: "What is the strongest criticism of labeling products as 'normal'?",
        choices: [
            "It suggests that people outside the category are abnormal or deficient",
            "It prevents consumers from understanding ingredients",
            "It increases manufacturing confusion",
            "It weakens scientific accuracy in chemistry"
        ],
        correct: 0,
        explanation: "'Normal' creates an implied hierarchy of acceptable vs unacceptable bodies or appearances."
    },

    {
        enemy: "",
        quote: "'Residents fear invasion as thousands cross southern border overnight'",
        text: "Rewrite this headline to be more neutral and accurate",
        type: "written",
        explanation: "A neutral headline would focus on facts and numbers without using threat-based language like 'invasion' or 'fear'."
    },

    {
        enemy: "",
        quote: "'Spaz removed from song lyrics after criticism'",
        text: "Why was the word 'spaz' criticized in the article set?",
        choices: [
            "It was considered outdated music slang only",
            "It carries ableist connotations connected to disability-related mockery",
            "It violates copyright law in music production",
            "It is considered politically partisan language"
        ],
        correct: 1,
        explanation: "The criticism centered around ableist implications tied to disability and mockery."
    },

    {
        enemy: "",
        quote: "'Pretext traffic stops'",
        text: "What is most important about the word 'pretext' in discussions of traffic stops?",
        choices: [
            "It removes all concerns about profiling",
            "It means the stop was automatically illegal",
            "It refers exclusively to speeding violations",
            "It suggests the stated reason may conceal another motive"
        ],
        correct: 3,
        explanation: "'Pretext' implies that the visible justification may not be the true reason for the stop."
    },

    {
        enemy: "",
        quote: "'Racial wealth gap hard to close'",
        text: "What does the phrase 'wealth gap' emphasize more effectively than simply saying 'poverty'?",
        choices: [
            "Short-term emotional hardship only",
            "Temporary economic inconvenience",
            "Differences in accumulated resources and opportunity over time",
            "Individual spending habits"
        ],
        correct: 2,
        explanation: "'Wealth gap' highlights structural inequality involving assets, inheritance, and long-term opportunity."
    },

    {
        enemy: "",
        quote: "'The homeless' vs 'people experiencing homelessness'",
        text: "Why do some writers avoid using 'the homeless' as a category label?",
        choices: [
            "Because it is grammatically incorrect",
            "Because it removes emotional seriousness",
            "Because it is too technical for journalism",
            "Because it can reduce people to a single condition or identity"
        ],
        correct: 3,
        explanation: "The concern is that identity-first labeling can flatten people into one defining condition."
    },

    {
        enemy: "",
        quote: "'Critics argue pretext traffic stops disproportionately impact marginalized communities'",
        text: "Explain why the word 'pretext' changes the meaning of this headline compared to simply saying 'traffic stops'.",
        type: "written",
        explanation: "'Pretext' implies the stated reason for the stop may not be the real reason, suggesting hidden motives or bias."
    },

    {
        enemy: "",
        quote: "'Climate crisis vs climate change'",
        text: "What is the strongest rhetorical effect of using 'crisis' instead of 'change'?",
        choices: [
            "It removes scientific discussion entirely",
            "It frames the issue as urgent, immediate, and harmful",
            "It focuses only on weather patterns",
            "It guarantees political neutrality"
        ],
        correct: 1,
        explanation: "'Crisis' intensifies urgency and moral seriousness."
    },

    {
        enemy: "",
        quote: "'Boy Scouts changing name after 114 years'",
        text: "What broader issue does the renaming debate primarily reflect?",
        choices: [
            "Whether titles should be shortened for marketing",
            "Whether institutions should adapt language to changing ideas about inclusion",
            "Whether scouting activities should become less competitive",
            "Whether all historical organizations should dissolve"
        ],
        correct: 1,
        explanation: "The debate centered on inclusion, representation, and who feels acknowledged by institutional language."
    },

    {
        enemy: "",
        quote: "'Chinese Taipei vs Taiwan'",
        text: "Why is the terminology politically significant in international coverage?",
        choices: [
            "Because international sports ban geographic terminology",
            "Because both names refer to unrelated places",
            "Because journalists prefer shorter phrasing",
            "Because naming reflects geopolitical recognition and legitimacy disputes"
        ],
        correct: 3,
        explanation: "The wording carries diplomatic and political implications about sovereignty and recognition."
    },

    {
        enemy: "",
        quote: "'Paper ceiling'",
        text: "What does the metaphor 'paper ceiling' most directly critique?",
        choices: [
            "Hiring systems that overvalue formal credentials",
            "Limits on journalism publishing",
            "Environmental waste from paperwork",
            "Physical barriers in education buildings"
        ],
        correct: 0,
        explanation: "'Paper ceiling' critiques barriers caused by degree requirements and credential systems."
    },

    {
        enemy: "",
        quote: "'Scientists warn climate crisis could displace millions over the next century'",
        text: "Explain the difference in meaning between calling this a 'climate crisis' versus 'climate change'. Which is stronger and why?",
        type: "written",
        explanation: "'Crisis' signals urgency and immediate danger while 'change' is more neutral and gradual."
    },

    {
        enemy: "",
        quote: "'Affordable ethnic food'",
        text: "What criticism appeared in discussions about 'cheap ethnic food' language?",
        choices: [
            "The phrase only applies to imported ingredients",
            "The phrase can normalize undervaluing labor and culture",
            "The phrase is scientifically inaccurate",
            "The phrase increases food safety risks"
        ],
        correct: 1,
        explanation: "Critics argued that describing ethnic food primarily as cheap can devalue the labor and culture behind it."
    },

    {
        enemy: "",
        quote: "'Book bans vs content review'",
        text: "Why might different groups choose different labels for the same policy action?",
        choices: [
            "Because the terms have identical connotations",
            "Because schools prohibit persuasive wording",
            "Because the terms refer to different subjects entirely",
            "Because the labels frame either censorship or accountability"
        ],
        correct: 3,
        explanation: "Different wording changes whether the action is framed as protection or censorship."
    },

    {
        enemy: "",
        quote: "'Autistic person vs person with autism'",
        text: "What is central to the disagreement between identity-first and person-first language?",
        choices: [
            "Whether diagnosis systems should be removed",
            "Whether autism exists medically",
            "Whether grammar rules require adjectives first",
            "Whether identity should be integrated into or separated from personhood"
        ],
        correct: 3,
        explanation: "The disagreement concerns how identity and personhood should be linguistically framed."
    },

    {
        enemy: "",
        quote: "'Google Translate became sexist'",
        text: "Why are algorithmic translation biases significant?",
        choices: [
            "Because algorithms eliminate human influence entirely",
            "Because translation software ignores all grammar rules",
            "Because automated systems can reproduce existing societal stereotypes",
            "Because machines intentionally form political opinions"
        ],
        correct: 2,
        explanation: "Algorithms often inherit patterns and biases present in existing human language data."
    },

    {
        enemy: "",
        quote: "'Book bans vs content review'",
        text: "A school board calls its policy 'content review'. A parent group calls it a 'book ban'. Explain why each group chose their label and what each framing implies.",
        type: "written",
        explanation: "'Content review' frames the action as responsible oversight, while 'book ban' frames it as censorship."
    },

    {
        enemy: "",
        quote: "'Lowrider cruising ban'",
        text: "Why did critics argue the cruising ban carried racial implications?",
        choices: [
            "Because the ordinance was passed without public input from affected communities",
            "Because the law targeted only luxury vehicles",
            "Because enforcement disproportionately affected cultural practices associated with Latino communities",
            "Because cruising is legally protected speech"
        ],
        correct: 2,
        explanation: "Critics argued the policy disproportionately impacted cultural expression linked to Latino communities."
    },

    {
        enemy: "",
        quote: "'Mismatched headline'",
        text: "In Part 3 analysis, what makes a headline 'mismatched' rather than simply biased?",
        choices: [
            "It fails to accurately represent the tone or seriousness of the article itself",
            "It contains more than one adjective",
            "It includes direct quotations",
            "It avoids emotional language entirely"
        ],
        correct: 0,
        explanation: "A mismatched headline distorts or misrepresents the actual content or gravity of the article."
    },

    {
        enemy: "",
        quote: "'Language shapes the way we think'",
        text: "What core idea from the article set does this statement support?",
        choices: [
            "Language influences perception, categorization, and social understanding",
            "Vocabulary changes only grammar usage",
            "Thought exists independently from communication systems",
            "Words have no measurable social impact"
        ],
        correct: 0,
        explanation: "The idea emphasizes that language affects perception and social cognition."
    },

    {
        enemy: "",
        quote: "'Judge bars attorneys from calling shooting victims victims before verdict is reached'",
        text: "Why is the repeated use of the word 'victims' considered legally significant in this context?",
        choices: [
            "Because jurors are not allowed to hear descriptive language",
            "Because the word has no accepted legal meaning",
            "Because the term can imply that a crime has already been conclusively established",
            "Because courts prohibit emotionally charged vocabulary entirely"
        ],
        correct: 2,
        explanation: "'Victim' can imply confirmed harm and criminal responsibility before guilt has been determined."
    },

    {
        enemy: "",
        quote: "'Media bias growing'",
        text: "A news outlet headlines a protest as 'Violent mob storms city streets'. Rewrite this headline to be more neutral while still being accurate.",
        type: "written",
        explanation: "A neutral headline would describe what happened factually without loaded words like 'mob' or 'storms'."
    },

    {
        enemy: "",
        quote: "'Media bias growing'",
        text: "According to the Part 3 concepts, why can biased headlines have broad societal effects?",
        choices: [
            "Because repeated framing can shape public interpretation and reinforce stereotypes",
            "Because headlines legally determine court rulings",
            "Because readers never question headlines",
            "Because headline writers are trained to maximize emotional impact"
        ],
        correct: 0,
        explanation: "Repeated framing influences public perception and can reinforce existing assumptions or systems."
    },

    {
        enemy: "",
        quote: "'School district removes chief from leadership titles after concerns about cultural implications'",
        text: "What larger language debate is reflected through this headline?",
        choices: [
            "Whether schools should eliminate all job titles entirely",
            "Whether institutions should reconsider terms tied to historical or cultural stereotypes",
            "Whether educational systems should avoid organizational hierarchy",
            "Whether leadership terminology reduces workplace efficiency"
        ],
        correct: 1,
        explanation: "The debate centers on how historical language associations affect representation and inclusion."
    },

    {
        enemy: "",
        quote: "'Beauty company removes the word normal from product labels to reduce exclusionary messaging'",
        text: "What is the strongest implication behind describing the language as 'exclusionary'?",
        choices: [
            "The term lacks dictionary definition",
            "The term may indirectly suggest that people outside the category are abnormal or inferior",
            "The wording only affects advertising regulations",
            "The company is eliminating all product classifications"
        ],
        correct: 1,
        explanation: "'Normal' creates implied standards that can exclude people who do not fit the category."
    },

    {
        enemy: "",
        quote: "'Experts say widening racial wealth gap reflects generations of unequal opportunity'",
        text: "Why is the phrase 'generations of unequal opportunity' rhetorically significant?",
        choices: [
            "It focuses entirely on short-term spending decisions",
            "It describes temporary financial instability only",
            "It frames inequality as structural and long-term rather than purely individual",
            "It removes historical context from economic issues"
        ],
        correct: 2,
        explanation: "The wording emphasizes systemic inequality developing across generations."
    },

    {
        enemy: "",
        quote: "'Community advocates urge media outlets to stop referring to unhoused residents as the homeless'",
        text: "Explain why advocates prefer 'people experiencing homelessness' over 'the homeless'. What does each phrase imply about the person?",
        type: "written",
        explanation: "'The homeless' reduces people to a single identity, while 'people experiencing homelessness' treats housing as a circumstance rather than a defining trait."
    }

];
// ---- PRE/POST SURVEY QUESTIONS ----
const surveyQuestions = [
  {
    id: "awareness",
    text: "When I read a news headline or article, I notice when specific word choices might be shaping my opinion.",
    scale: [
      "1 — Never notice this",
      "2 — Rarely notice",
      "3 — Sometimes",
      "4 — Usually notice",
      "5 — Always notice this"
    ]
  },
  {
    id: "belief",
    text: "I believe the specific words a writer chooses can change how I feel about a person, group, or event.",
    scale: [
      "1 — Strongly disagree",
      "2 — Disagree",
      "3 — Neutral",
      "4 — Agree",
      "5 — Strongly agree"
    ]
  },
  {
    id: "confidence",
    text: "I feel confident identifying when a word or phrase is being used to influence how I think.",
    scale: [
      "1 — Not at all confident",
      "2 — Slightly confident",
      "3 — Somewhat confident",
      "4 — Confident",
      "5 — Very confident"
    ]
  }
];


const forestQuestions = [

    {
        enemy: "",
        quote: "",
        text: "A source consistently uses 'opportunity gap' instead of 'achievement gap' when reporting on school performance differences. What is the most significant implication of this choice?",
        choices: [
            "It shifts focus from students' outcomes to the systemic conditions that produce those outcomes",
            "It suggests the gap is temporary and will close once students apply more effort",
            "It implies that schools rather than families are solely responsible for educational outcomes",
            "It removes the possibility of measuring academic performance across different groups"
        ],
        correct: 0,
        explanation: "'Opportunity gap' frames the cause as structural, while 'achievement gap' frames it as a performance deficit \u2014 the difference in framing determines where responsibility is located."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the most precise difference between 'misinformation' and 'disinformation' as analytical terms?",
        choices: [
            "Misinformation refers to false content spread regardless of intent, while disinformation refers to false content spread with deliberate intent to deceive",
            "Disinformation is always produced by government sources, while misinformation originates from individuals",
            "Misinformation causes more societal harm because it spreads faster through informal networks than disinformation",
            "Disinformation refers to inaccurate visual media, while misinformation refers to inaccurate written or spoken content"
        ],
        correct: 0,
        explanation: "The critical distinction is intent \u2014 disinformation is a deliberate act, while misinformation can be accidental. Using the wrong term obscures accountability."
    },

    {
        enemy: "",
        quote: "",
        text: "Why does the framing of 'disaster capitalism' carry more analytical weight than 'Mother Nature' when describing economic outcomes following a natural disaster?",
        choices: [
            "It focuses on long-term environmental policy rather than short-term financial responses to crises",
            "It identifies human decision-making as responsible for who bears the cost of recovery rather than attributing outcomes to natural forces",
            "It implies that corporations intentionally cause natural disasters to profit from the resulting crisis",
            "It removes emotional language from economic analysis and replaces it with scientific terminology"
        ],
        correct: 1,
        explanation: "'Mother Nature' naturalizes suffering, suggesting outcomes were inevitable. 'Disaster capitalism' names the human systems that determine who loses and who profits."
    },

    {
        enemy: "",
        quote: "",
        text: "A journalist writes that protesters 'reacted' to a policy decision. An editor changes this to protesters 'overreacted.' What is the strongest analytical problem with this edit?",
        choices: [
            "It removes factual information about the sequence of events that led to the demonstration",
            "It changes the grammatical structure of the sentence in a way that introduces ambiguity about who acted first",
            "It implies the journalist lacked sufficient evidence to support the original characterization of events",
            "It embeds a judgment about the proportionality of the response before the reader can evaluate the policy or the protest"
        ],
        correct: 3,
        explanation: "'Overreacted' is a judgment, not a description \u2014 it tells the reader how to evaluate the response rather than letting them assess it based on what happened."
    },

    {
        enemy: "",
        quote: "",
        text: "What does the continued use of 'the Far East' or 'the Orient' to describe East Asia reveal about the perspective embedded in geographic language?",
        choices: [
            "It is a neutral shorthand adopted by international organizations and carries no evaluative connotation",
            "It describes directional location accurately in relation to global longitude and has no cultural implications",
            "It positions Europe or the Western world as the implicit geographic and cultural center from which distance is measured",
            "It reflects a historical trade relationship between European and Asian nations that no longer carries cultural meaning"
        ],
        correct: 2,
        explanation: "'Far East' and 'Orient' only make geographic sense if Europe is the reference point \u2014 the language itself encodes a Eurocentric worldview."
    },

    {
        enemy: "",
        quote: "",
        text: "How does replacing 'foreign language' with 'world language' in an educational context most significantly change the implied value of the subject?",
        choices: [
            "It encourages students to study languages spoken by larger populations rather than less commonly spoken ones",
            "It removes the geographic and cultural context that helps students understand why a language developed as it did",
            "It implies all languages are equally represented in international institutions and business contexts",
            "It frames multilingualism as a globally relevant skill rather than marking other languages as outside or secondary to a dominant norm"
        ],
        correct: 3,
        explanation: "'Foreign' positions other languages as outside the norm \u2014 'world language' reframes linguistic diversity as a resource rather than an otherness."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the key analytical distinction between 'bias' and 'lie' when evaluating media content?",
        choices: [
            "A lie is always more harmful than bias because it introduces factually false information into public discourse",
            "A lie involves a knowingly false statement, while bias involves a selective or skewed framing that can occur without conscious deception",
            "Bias is a structural feature of all media organizations, while lying is always the act of an individual journalist or editor",
            "Bias is identifiable through content analysis, while a lie can only be confirmed through legal proceedings or official fact-checking"
        ],
        correct: 1,
        explanation: "Conflating bias with lying overreaches \u2014 bias can be unconscious, structural, or selective, while lying requires intent. The distinction matters for how we hold media accountable."
    },

    {
        enemy: "",
        quote: "",
        text: "The term 'whitelisted' describes approved items, while 'blacklisted' describes prohibited ones. What does this terminology most significantly reflect?",
        choices: [
            "It is a historical technical convention that has no relationship to racial language because it originated in computing contexts",
            "It creates confusion in international contexts because color associations vary across different cultures and languages",
            "It embeds color-based value associations into technical language that link whiteness with approval and blackness with exclusion",
            "It is only problematic when used in social contexts rather than in technical or professional environments"
        ],
        correct: 2,
        explanation: "Regardless of origin, these terms normalize value hierarchies based on color that parallel racial hierarchies \u2014 many organizations have replaced them with 'allowlist' and 'blocklist'."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the most analytically precise reason why 'cross lighting' as a substitution for 'cross burning' is considered a problematic euphemism?",
        choices: [
            "It removes the religious dimension of the act in a way that makes it harder to prosecute as a hate crime in legal contexts",
            "It is a substitution created by opponents of civil rights legislation to delegitimize the experiences of those targeted",
            "It replaces language that accurately communicates the terror and intimidation of the act with neutral imagery that obscures its harmful intent",
            "It introduces an inaccurate factual description because crosses used in this context are not lit but rather ignited"
        ],
        correct: 2,
        explanation: "'Cross burning' communicates the violence and intimidation of the act \u2014 'cross lighting' aestheticizes it, which serves to minimize harm experienced by targeted communities."
    },

    {
        enemy: "",
        quote: "",
        text: "Why is the distinction between 'prisoner' and 'hostage' more than a matter of legal categorization?",
        choices: [
            "It reflects whether the detention occurred on domestic or international soil, which changes the legal framework that applies",
            "It determines whether the person is framed as someone who committed an act or someone who is innocent and being held against their will",
            "It specifies which government agency is responsible for negotiating the person's release or return",
            "It indicates whether the person has been formally charged, which affects the timeline and process for any legal proceedings"
        ],
        correct: 1,
        explanation: "'Prisoner' implies guilt or wrongdoing; 'hostage' implies innocence and victimization \u2014 the word chosen shapes public sympathy and political pressure to act."
    },

    {
        enemy: "",
        quote: "",
        text: "A source describes a community as 'disadvantaged' rather than 'underserved.' What assumption does 'disadvantaged' embed that 'underserved' avoids?",
        choices: [
            "That the condition originates within the community itself rather than in the failure of external systems to provide adequate resources",
            "That the community's economic situation is temporary and will improve without structural intervention or policy change",
            "That the government bears no responsibility for the conditions experienced by the community in question",
            "That individuals in the community lack the personal capabilities needed to access available opportunities on their own"
        ],
        correct: 0,
        explanation: "'Disadvantaged' locates the problem in the community; 'underserved' locates it in the institutions that have failed to provide adequate support \u2014 a critical framing difference."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the most significant analytical difference between 'person-first language' (person with autism) and 'identity-first language' (autistic person) as competing frameworks?",
        choices: [
            "Person-first language is preferred in all medical and educational contexts while identity-first language is only used in advocacy settings outside of formal institutions",
            "Identity-first language implies the condition is permanent and untreatable while person-first language leaves open the possibility of change or improvement",
            "Person-first language separates identity from condition to emphasize full humanity, while identity-first language treats the condition as integral to who the person is rather than something they merely have",
            "Person-first language was developed by medical professionals while identity-first language was developed by community members who rejected clinical definitions"
        ],
        correct: 2,
        explanation: "Neither framework is universally preferred \u2014 different individuals and communities choose different approaches based on how they understand the relationship between identity and condition."
    },

    {
        enemy: "",
        quote: "",
        text: "What does the existence of gendered job titles (e.g., 'stewardess' vs 'flight attendant') reveal about how language encodes assumptions?",
        choices: [
            "It demonstrates that gendered titles are always more precise than neutral ones because they communicate additional information about the role",
            "It reflects a historical period in which gender-neutral language had not yet been developed and carries no current implications",
            "It shows that language can normalize the association between certain genders and certain roles in ways that shape hiring expectations and professional status",
            "It reveals that certain professions were historically dominated by one gender and that this is simply an accurate record of that history"
        ],
        correct: 2,
        explanation: "Gendered titles do not just describe who held a role \u2014 they prescribe who should hold it, making them a form of language that reinforces occupational segregation."
    },

    {
        enemy: "",
        quote: "",
        text: "Why is the term 'Middle East' considered by some scholars to be geographically imprecise in the same way 'Far East' is?",
        choices: [
            "Both terms define geographic regions relative to a European center point rather than using self-determined regional names or geographic coordinates",
            "Both terms originally referred to military theater designations that were later adopted into civilian geographic language without revision",
            "Both terms are used interchangeably by journalists and geographers and do not reflect any particular cultural or political perspective",
            "Both terms were created by the United Nations to group regions for administrative purposes and have been disputed by local governments"
        ],
        correct: 0,
        explanation: "'Middle East' only makes sense as 'middle' if measured from Europe \u2014 'West Asia' is a geographic alternative that does not embed a Eurocentric frame of reference."
    },

    {
        enemy: "",
        quote: "",
        text: "A report about a war uses the phrase 'war' consistently while a second report uses 'genocide.' Both refer to the same conflict. What is the most significant analytical consequence of this difference?",
        choices: [
            "'Genocide' carries a specific legal definition that implies systematic intent to destroy a group, which activates different international legal obligations than 'war' does",
            "The two terms are used by different political factions and the choice between them reflects the publication's partisan alignment rather than factual reporting",
            "'Genocide' is always the more accurate term in conflicts involving ethnic or racial groups regardless of whether intent to destroy has been established",
            "'War' is a more precise term because it describes the military nature of the conflict without making legal claims that have not been formally adjudicated"
        ],
        correct: 0,
        explanation: "Calling something a genocide triggers specific obligations under international law \u2014 the word choice has real legal and political consequences beyond tone or framing."
    },

    {
        enemy: "",
        quote: "",
        text: "A headline reads: 'Protesters Damage Property During March.' The article describes one broken window out of thousands of participants. What type of headline is this and why?",
        choices: [
            "Mismatched, because the headline uses passive voice in a way that obscures which participants were responsible for the damage",
            "Neutral, because damage to property did occur and the headline accurately reports that fact without making a broader judgment",
            "Biased, because the headline uses emotionally loaded language designed to make readers form a negative opinion of all protesters",
            "Mismatched, because the headline disproportionately emphasizes a minor incident in a way that misrepresents the scale and character of the event"
        ],
        correct: 3,
        explanation: "The headline is technically accurate but mismatched \u2014 it frames a marginal detail as the defining feature of the event, distorting the overall picture."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the key characteristic that distinguishes a 'mismatched' headline from a simply 'biased' headline according to the Part 3 framework?",
        choices: [
            "A biased headline uses loaded emotional language while a mismatched headline uses technically neutral language that is placed in the wrong context",
            "A mismatched headline may use accurate language but fails to reflect the tone, gravity, or central focus of the article it introduces",
            "A biased headline always contains factually false information while a mismatched headline contains only selective or incomplete information",
            "A mismatched headline is produced intentionally to mislead readers while a biased headline can result from unconscious editorial decisions"
        ],
        correct: 1,
        explanation: "A mismatched headline can be word-for-word accurate and still be misleading because it does not represent what the article actually focuses on or how serious the issue is."
    },

    {
        enemy: "",
        quote: "",
        text: "According to the Part 3 framework, when is strong or 'toned' language in a headline NOT considered biased?",
        choices: [
            "When the publication has a documented history of using similar language consistently across comparable stories",
            "When the strong language appears in a subheadline rather than the primary headline, reducing its prominence on the page",
            "When the language accurately reflects the severity or gravity of the situation described in the article rather than inflating or diminishing it",
            "When the language is attributed to a named source rather than stated directly by the journalist writing the headline"
        ],
        correct: 2,
        explanation: "Strong language is appropriate when reality demands it \u2014 bias is about inaccuracy, not intensity. A headline calling a harmful act harmful is not biased if the article confirms the harm."
    },

    {
        enemy: "",
        quote: "",
        text: "A headline reads: 'Woman Becomes First Female CEO of Major Bank.' What type of potential bias does this headline contain?",
        choices: [
            "It frames the milestone through the lens of gender in a way that may diminish her professional qualifications by centering her identity over her accomplishment",
            "It uses the word 'female' which is a scientifically imprecise term that should be replaced with 'woman' for journalistic accuracy",
            "It implies that no woman has ever held a senior leadership position in the financial industry before this particular appointment",
            "It focuses on a single individual rather than addressing the systemic barriers that prevented women from reaching this position earlier"
        ],
        correct: 0,
        explanation: "Framing an appointment primarily through gender can simultaneously celebrate and undermine \u2014 it marks the person as exceptional in a way that can overshadow the substance of the role."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the most important distinction between implicit bias in a person and bias in media, according to the Part 3 framework?",
        choices: [
            "Implicit bias always leads to discriminatory actions, while media bias only influences readers who already hold strong prior beliefs about the topic",
            "Implicit bias is formed through personal experience, while media bias is always the product of deliberate editorial decisions made by publication owners",
            "Media bias is always intentional and can be legally prosecuted, while implicit bias cannot be addressed through policy or institutional accountability",
            "Implicit bias is internal and often unconscious, while media bias is an external influence with a multiplied impact because it shapes the perceptions of large audiences"
        ],
        correct: 3,
        explanation: "The key difference is scale and accountability \u2014 an individual's bias affects personal interactions, while media bias shapes public discourse and societal norms at a much larger scale."
    },

    {
        enemy: "",
        quote: "",
        text: "A neutral headline about a protest accurately describes what happened without loaded language. According to Part 3, what should annotation of that headline focus on?",
        choices: [
            "Confirming that the headline matches a standard journalistic format and does not deviate from the conventions of the publication",
            "Identifying the specific word choices that made the headline more accurate and explaining what less precise alternatives the writer avoided",
            "Comparing the headline to similar headlines from competing publications to establish whether the neutrality is consistent across outlets",
            "Evaluating whether the headline was written before or after the article to determine if editorial influence shaped the final wording"
        ],
        correct: 1,
        explanation: "Annotating neutral headlines for good choices is as analytically valuable as flagging bad ones \u2014 it builds understanding of what accurate, empathetic language looks like in practice."
    },

    {
        enemy: "",
        quote: "",
        text: "A headline reads: 'Looting Breaks Out in Neighborhood.' The article describes residents taking essential supplies after a disaster left the area without functioning stores for a week. What makes this headline problematic?",
        choices: [
            "It uses a passive construction that removes human agency from the event and prevents readers from understanding who was involved",
            "It omits the cause of the disaster, which is essential context for readers to understand why the neighborhood was without resources",
            "It focuses on one neighborhood rather than covering the broader geographic area affected by the same disaster and similar conditions",
            "It uses the word 'looting' to describe behavior that the article presents as survival-driven, framing a desperate situation as criminal without the article supporting that characterization"
        ],
        correct: 3,
        explanation: "When the article frames the situation as survival and the headline frames it as crime, the headline is mismatched \u2014 and the word 'looting' carries racial and criminal connotations that shape reader interpretation."
    },

    {
        enemy: "",
        quote: "",
        text: "According to Part 3, what does it mean for a headline to 'match the gravity of the situation'?",
        choices: [
            "The headline accurately represents the number of people affected by the event so that readers can assess the scale of the issue being reported",
            "The headline avoids any emotionally resonant language that might cause readers to respond more strongly than the facts of the situation warrant",
            "The headline uses the same level of formal language as the body of the article to ensure consistency in register and tone throughout the piece",
            "The headline's tone and emphasis reflect the actual seriousness of harm, injustice, or significance described in the article rather than downplaying or inflating it"
        ],
        correct: 3,
        explanation: "Downplaying harm is a form of bias \u2014 a headline that treats a serious violation of rights as a minor inconvenience fails the same test as one that overstates an event."
    },

    {
        enemy: "",
        quote: "",
        text: "What does Part 3 mean when it says institutions have 'multiplied responsibility' to account for bias compared to individuals?",
        choices: [
            "Because media institutions reach large audiences, their biased framing can shape public opinion and reinforce systemic inequalities at a scale that a single person's bias cannot",
            "Because institutions employ more people, they have more opportunities to identify and correct bias before content is published or broadcast",
            "Because institutional bias is always the result of deliberate editorial policy rather than unconscious individual decisions by writers or editors",
            "Because institutions are legally accountable for the content they publish in ways that individual speakers are not under current defamation law"
        ],
        correct: 0,
        explanation: "Scale is the key concept \u2014 one person's unchecked bias affects their immediate circle; an institution's unchecked bias shapes how millions of people understand a group, event, or issue."
    },

    {
        enemy: "",
        quote: "",
        text: "A publication consistently describes labor strikes using words like 'chaos,' 'disruption,' and 'demands' while describing executive decisions using words like 'strategy,' 'vision,' and 'leadership.' What type of bias does this pattern represent?",
        choices: [
            "Implicit bias that is unconscious and therefore cannot be identified through content analysis of published material alone",
            "Confirmation bias, because reporters are selecting evidence that supports a pre-existing belief about the relative value of different types of workers",
            "Selection bias, because the publication chooses to cover strikes more frequently than executive decisions despite their comparable newsworthiness",
            "Systematic framing bias that consistently elevates one group's actions as rational and purposeful while framing another group's actions as disruptive and emotional"
        ],
        correct: 3,
        explanation: "When language patterns across many stories consistently assign rationality to one group and irrationality to another, this is structural framing bias that shapes how readers perceive each group's legitimacy."
    },

    {
        enemy: "",
        quote: "",
        text: "How does the Part 3 framework define a 'biased' headline as distinct from a 'mismatched' one?",
        choices: [
            "A biased headline uses language that is inaccurate, emotionally loaded, or perpetuates stereotypes regardless of whether it matches the article, while a mismatched headline may use accurate language that simply does not represent the article's content",
            "A mismatched headline is more harmful than a biased one because readers are more likely to trust language that appears accurate on its surface",
            "A biased headline always contains factually verifiable errors while a mismatched headline is subjectively misleading but cannot be fact-checked",
            "A biased headline is produced intentionally to advance a political agenda while a mismatched headline results from careless editing rather than deliberate manipulation"
        ],
        correct: 0,
        explanation: "The framework treats these as distinct categories \u2014 bias is about the language itself being inaccurate or loaded, while mismatch is about the relationship between the headline and the article it introduces."
    },

    {
        enemy: "",
        quote: "",
        text: "What is the most analytically significant reason that 'patriots' and 'traitors' or 'patriots' and 'looters' are used to describe the same group of people by different sources?",
        choices: [
            "The disagreement over terms reflects a genuine factual dispute about what actions occurred rather than a disagreement about how to evaluate those actions",
            "The terms reflect legal distinctions that apply differently depending on whether the actions occurred on public or private property",
            "The choice of term encodes the speaker's judgment about whether the group's actions serve or threaten the values and interests the speaker considers legitimate",
            "Different publications use different terms to signal their intended audience rather than to make a claim about the morality of the actions described"
        ],
        correct: 2,
        explanation: "The same action can be labeled heroic or criminal depending entirely on whether the labeler views the cause as legitimate \u2014 the word encodes a political verdict, not a factual description."
    },

    {
        enemy: "",
        quote: "",
        text: "Why is language described in Part 2 as never fully neutral, even when a writer intends to be objective?",
        choices: [
            "Words acquire meaning only through individual reader interpretation, which varies so widely that no stable neutral meaning is possible for any term",
            "All word choices carry connotative associations shaped by history, culture, and power that activate meaning beyond the literal definition of the word",
            "Objectivity is a journalistic standard that applies only to opinion pieces and does not govern the language used in news reporting",
            "Language is controlled by dominant institutions that define what counts as neutral, making all claims to neutrality a reflection of institutional power"
        ],
        correct: 1,
        explanation: "Words do not exist in isolation \u2014 they carry histories and cultural associations that activate meaning the writer may not intend. This is why connotation analysis is necessary even for apparently neutral language."
    },

    {
        enemy: "",
        quote: "",
        text: "A student finds a headline that uses the word 'neglect' to describe a government's failure to address a health crisis. The article documents serious ongoing harm. According to Part 3, how should this headline be evaluated?",
        choices: [
            "As neutral, because 'neglect' is a standard descriptor used in policy contexts that does not carry significant emotional or evaluative weight for readers",
            "As appropriately toned, because 'neglect' accurately describes the seriousness of the failure documented in the article and matching language to reality is not bias",
            "As mismatched, because 'neglect' implies legal liability that the article does not establish, creating a gap between the headline's claim and the article's content",
            "As biased, because 'neglect' is an emotionally loaded term that makes a judgment about intent before any legal or official determination has been made"
        ],
        correct: 1,
        explanation: "Part 3 explicitly notes that strong language is not automatically biased \u2014 when the article supports the severity of the term, using strong language is accurate rather than distorted."
    },

    {
        enemy: "",
        quote: "",
        text: "According to the Part 3 framework, what is the relationship between a headline that 'perpetuates racism' and the concept of implicit bias in the person who wrote it?",
        choices: [
            "The connection between implicit bias and racist output is limited to visual media because written language can always be revised before publication",
            "Implicit bias produces racist headlines only in contexts where the writer has had no exposure to diversity training or critical media education",
            "A racist headline can only result from deliberate intent because professional editorial standards require writers to reflect on language before publishing",
            "A headline can perpetuate racism through unconscious word choices shaped by the writer's implicit bias, meaning harmful output does not require deliberate racist intent"
        ],
        correct: 3,
        explanation: "This is a core concept from both Part 2 and Part 3 \u2014 implicit bias can produce harmful language without conscious awareness, which is why analytical frameworks for evaluating language are necessary."
    },

    {
        enemy: "",
        quote: "",
        text: "A student is evaluating a headline about a community facing a public health crisis. The headline reads: 'Officials Address Concerns in Struggling Area.' The article describes a multi-year failure to provide clean water. Which evaluation is most analytically sound?",
        choices: [
            "The headline is biased because 'struggling area' is a loaded term that stigmatizes the community rather than describing the specific nature of the problem",
            "The headline is mismatched because 'address concerns' and 'struggling area' significantly understate the documented severity and duration of the harm described in the article",
            "The headline is neutral because it describes official action without assigning blame or making claims about the cause of the community's situation",
            "The headline is accurate because it correctly identifies that officials responded, which is the most newsworthy element of the story regardless of what preceded it"
        ],
        correct: 1,
        explanation: "When a headline uses soft language like 'address concerns' to describe a multi-year failure causing documented harm, it fails the gravity test \u2014 the mismatch between headline and article is itself a form of bias."
    },

];