// 1.폴더 지정하기
// 2. git init으로 폴더를 git으로 지정]
// code . == 경로에 있는 파일을 새로 vscode 열어줌



// commit = 현재 프로젝트 상태 저장 (사진으로 찍는다는 느낌)
// 1.커밋할 파일 선택 - git add 파일이름
// 2.커밋하기 - git commit -m "아무이름지정"

// 1,2 모든파일 선택 - git add . 
// 후 커밋하기 - git commit -m "아무이름지정"


//commit 잘못했을때,commit 한걸 돌리고 싶을때 - git log 를 쳐서 원하는 커밋 아이디 복사 , git reset 커밋아이디 붙혀넣기 --hard

// 브랜치 만드는 법 - git branch 브랜치이름 ( 다른 작업자와 작업 내용이 겹치지 않게 하기 위해서 )
// 새로만든 브랜치로 이동 - git checkout 브랜치이름 (서로다른 브랜치는 작업물 공유 x)
// 다른 브랜치들을 다 합치는 법 - git merge 합치고 싶은 브랜치이름

//gitbub 에 올리는 법 (올리기 전 commit 필수,이후에 push)

// 1. (git) (remote) (add) (원하는 이름) (github repository주소)
// 2. (git) (push) (원하는 이름) (원하는 브랜치)