#sql test.common.sql:
	order by @orderBy@ limit @from, @to

#select test.sql1:
    select * from user where 1=1
	and id=@id
	and userName=@userName
	and password=@password
	and email=@email
	#if(@ids && @ids.length > 0){
		#for(var i = 0; i < @ids.length; i++) {
			or id= @ids[i]
		}
	}
	#include(test.common.sql)

#insert test.sql2:
	insert into table user(id, userName, email, password)
	values(@@id, @userName, @email, @password)	



