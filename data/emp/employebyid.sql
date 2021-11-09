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