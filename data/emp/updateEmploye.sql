UPDATE
    [dbo].[employee]
SET
    [name] = @name,
    [email] = @email,
    [designation] = @designation,
    [phoneNumber] = @phoneNumber
WHERE
    [Id] = @Id
SELECT
    [Id],
    [name],
    [email],
    [designation],
    [phoneNumber]
FROM
    [dbo].[employee]
WHERE
    [Id] = @Id