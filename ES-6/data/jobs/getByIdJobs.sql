SELECT
    [Id],
    [Name],
    [Position],
    [Office],
    [Salary]
FROM
    [dbo].[jobsD]
WHERE
    [Id] = @Id