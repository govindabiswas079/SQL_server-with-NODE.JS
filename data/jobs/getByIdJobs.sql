SELECT
    [Id],
    [Name],
    [Position],
    [Office],
    [Salary],
    [currentDate]
FROM
    [dbo].[jobsD]
WHERE
    [Id] = @Id