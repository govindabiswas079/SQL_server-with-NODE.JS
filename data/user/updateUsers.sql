UPDATE
    [dbo].[users]
SET
    [name] = @name,
    [email] = @email,
    [username] = @username,
    [mobile] = @mobile,
    [dob] = @dob,
    [address] = @address,
    [counrty] = @counrty,
    [state] = @state,
    [city] = @city,
    [zipcode] = @zipcode,
    [role] = @role,
    [password] = @password
WHERE
    [Id] = @Id
SELECT
    [Id],
    [name],
    [email],
    [username],
    [mobile],
    [dob],
    [address],
    [counrty],
    [state],
    [city],
    [zipcode],
    [role],
    [password]
FROM
    [dbo].[users]
WHERE
    [Id] = @Id