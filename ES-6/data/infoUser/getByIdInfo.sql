SELECT
                    [Id],
                    [Title],
                    [FirstName],
                    [LastName],
                    [Mobile],
                    [Dob],
                    [Email],
                    [Password],
                    [ConfirmPassword],
                    [currentDate]
FROM
                    [dbo].[InfoUser]
WHERE
                    [Id] = @Id