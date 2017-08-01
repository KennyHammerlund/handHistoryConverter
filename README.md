# handHistoryConverter
Translates Omaha indicator and Holdem indicator hand histories into a better format


JS file that uses regex to take poker hand history input from the program "omaha indicator" or "holdem Indicator" and return a more readable format. 


------  Input:  -------------

P1(BB) $580.50    -  VP:38 PFR:0 AF:0.7 W:55|50 STL:0|50 3B:0| CB:|50 N:-184.50 Hands:21
P2(UTG) $2558.08  -  VP:33 PFR:0 AF:0 W:0| STL:0|0 3B:0| CB:|0 N:-55 Hands:6
P3(MP) $215.90    -  VP:53 PFR:21 AF:1.7 W:55|67 STL:44|0 3B:0| CB:100|100 N:-15.50 Hands:19
P4(CO) $321.70    -  VP:48 PFR:14 AF:0.7 W:50|67 STL:0|33 3B:0|0 CB:67|0 N:40.50 Hands:21
P5(BTN) $1089     -  VP:67 PFR:50 AF:1.5 W:100|75 STL: 3B:50| CB:50| N:9 Hands:6
Me(SB) $353.50    -  VP:38 PFR:10 AF:3.0 W:36|75 STL:40|50 3B:0| CB:100|67 N:130.50 Hands:21


Pre Flop: Me(SB) with [5c,4h,4s,As]
P2(UTG) calls 10, P3(MP) folds, P4(CO) folds, P5(BTN) raises 20, Me(SB) calls 15, P1(BB) calls 10, P2(UTG) calls 10  


Flop: (Tc,3h,2d) (4 players)
Me(SB) bets 10, P1(BB) calls 10, P2(MP) folds, P5(BTN) raises 20, Me(SB) calls 10, P1(BB) calls 10  


Turn: Ah (3 players)
Me(SB) bets 20, P1(BB) calls 20, P5(BTN) calls 20  


River: Ks (3 players)
Me(SB) bets 20, P1(BB) calls 20, P5(BTN) calls 20  


Final:
Me(SB) shows [5c,4h,4s,As]
Me(SB) wins 128.50
Me(SB) wins 128.50


--------  Returns:  --------------

(BB) $580.50 - VP:38 PFR:0 AF:0.7 W:55|50 STL:0|50 3B:0| CB:|50 N:-184.50 Hands:21
(UTG) $2558.08 - VP:33 PFR:0 AF:0 W:0| STL:0|0 3B:0| CB:|0 N:-55 Hands:6
(MP) $215.90 - VP:53 PFR:21 AF:1.7 W:55|67 STL:44|0 3B:0| CB:100|100 N:-15.50 Hands:19
(CO) $321.70 - VP:48 PFR:14 AF:0.7 W:50|67 STL:0|33 3B:0|0 CB:67|0 N:40.50 Hands:21
(BTN) $1089 - VP:67 PFR:50 AF:1.5 W:100|75 STL: 3B:50| CB:50| N:9 Hands:6
Hero: (SB) $353.50 - VP:38 PFR:10 AF:3.0 W:36|75 STL:40|50 3B:0| CB:100|67 N:130.50 Hands:21

Pre Flop:
Hero: (SB) with 5♣ 4♥
, 4♠ A♠
(UTG) calls 10, (BTN) raises 20,
Hero: (SB) calls 15, (BB) calls 10, (UTG) calls 10

Flop: T♣ 3♥ 2♦
Hero: (SB) bets 10, (BB) calls 10, (MP) folds, (BTN) raises 20, Hero: (SB) calls 10, (BB) calls 10

Turn: A♥
Hero: (SB) bets 20, (BB) calls 20, (BTN) calls 20

River: K♠
Hero: (SB) bets 20, (BB) calls 20, (BTN) calls 20

Results: 3♥ 2♦ T♣ A♥ K♠
Heros Cards: 4♥ 5♣ 4♠ A♠
Hero: (SB) shows 5♣ 4♥ 4♠ A♠ Hero: (SB) wins 128.50 Hero: (SB) wins 128.50 

