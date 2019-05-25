<?php
include_once "api/lib.php";

$social_image = 'https://prototype.nukta.co.tz/static/media/add_img_1024x663.jpg';
$social_url = 'https://prototype.nukta.co.tz/';
$social_title = 'Nukta';
$social_description = 'Nukta hukuletea habari motomoto, makala zilizochambuliwa kwa ufanisi. Wao wanaripoti, sisi tunakuchambulia yanayokuhusu';
$social_keywords = 'nukta, uchambuzi, makala, data journalism, data, infographics';

$parameters = get('p');
if(startsWith($parameters,'article')){
	$title=str_replace('article/','',$parameters);
	$row = sql_row("select article.id, cover, title, lead, views,main_tag as category, concat(substring(monthname(published_on),1,3),' ',day(published_on),', ',year(published_on)) as date, concat(lower(replace(replace(title,'?',''),' ','-')),'.html')as url, concat(fname,' ',sname)as author from article left join user on article.author_id=user.id where lower(concat(lower(replace(replace(title,'?',''),' ','-')),'.html')) = :title ",array(':title'=>strtolower($title)));
	if($row){
		$social_image = $row['cover'];
		$social_url = home().$parameters;
		$social_title = 'Nukta | '.$row['title'];
		$social_description = $row['lead'];
		$social_keywords = $row['keywords'];
	}
}else if(startsWith($parameters,'category')){
	$title=str_replace('category/','',$parameters);
	$row = sql_row("select article.id, cover, title, lead, views,main_tag as category, concat(substring(monthname(published_on),1,3),' ',day(published_on),', ',year(published_on)) as date, concat(lower(replace(replace(title,'?',''),' ','-')),'.html')as url, concat(fname,' ',sname)as author from article left join user on article.author_id=user.id where lower(concat(lower(replace(replace(title,'?',''),' ','-')),'.html')) = :title ",array(':title'=>strtolower($title)));
	if(false){
		$social_image = $row['cover'];
		$social_url = home().$parameters;
		$social_title = 'Nukta | '.$row['title'];
		$social_description = $row['lead'];
		$social_keywords = $row['keywords'];
	}
}
?>

<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="theme-color" content="#4285f4"><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/favicon.ico"><title>Nukta</title><link href="/static/css/main.8b77bd7a.css" rel="stylesheet">

<title><?=$social_title?></title>
<meta name="description" content="<?=$social_description?>">
<meta name="keywords" content="<?=$social_keywords?>">

<meta property="fb:app_id" content="1317148675049370" />
<meta property="og:url" content="<?=$social_url?>" />
<meta property="og:title" content="<?=$social_title?>" />
<meta property="og:image" content="<?=$social_image?>" />
<meta property="og:description" content="<?=$social_description?>" />

<meta itemscope itemtype="http://schema.org/Article" />
<meta itemprop="headline" content="<?=$social_title?>" />
<meta itemprop="description" content="<?=$social_description?>" />
<meta itemprop="image" content="<?=$social_image?>" />

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@Nukta">
<meta name="twitter:title" content="<?=$social_title?>">
<meta name="twitter:description" content="<?=$social_description?>">
<meta name="twitter:image" content="<?=$social_image?>">
<meta name="twitter:domain" content="<?=$social_url?>">
</head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div><script type="text/javascript" src="/static/js/main.90746d95.js"></script></body></html>