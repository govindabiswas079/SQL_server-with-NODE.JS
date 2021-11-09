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