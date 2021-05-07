# article_nft

API

articles GET

requires user_id

{
  'article_id' : {
    'name' : String
    'content' : Text,
    'score' : score
  }
}


articles POST

{
	"name":String,
	"article": Text
}

returns article_id



article_score GET

requires article_id

returns summation score



article_score POST

{
	"article_id":String,
	"user_id": String,
  "score": Int
}
